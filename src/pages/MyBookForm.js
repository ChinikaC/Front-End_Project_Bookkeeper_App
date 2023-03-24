import { useState } from "react";

const MyBooksForm = ({ books, setBooks, postOwnedBook}) => {
  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookAuthor, setNewBookAuthor] = useState("");
  const [newBookDescription, setNewBookDescription] = useState("");
  const [newBookGenre, setNewBookGenre] = useState("");

  const [error, setError] = useState("");

  const handleValidation = () => {
    let errorMessage = ""

    // Check if name of book already exists
    if (books.find((book) => book.title === newBookTitle || book.author === newBookAuthor)) {
      errorMessage = "*This book already exists*"
    }
    if (books.find((book) => book.description === newBookDescription)) {
      errorMessage = "*A book with this description already exists*"
    }

    // Check that none of the fields are blank
    if (newBookTitle === "" || newBookAuthor === "" || newBookDescription === "" || newBookGenre === "") {
      errorMessage = "* Please fill in all of the fields *"
    }

    setError(errorMessage)
    return errorMessage !== "";
  };

  const handleAddBook = (e) => {
    // e.preventDefault();
    const response = fetch("http://localhost:8080/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newBookTitle,
        author: newBookAuthor,
        description: newBookDescription,
        genre: newBookGenre,
        ownedBooks: []
      })
    })
      .then((response) => response.json())
      .then((response) => {
        setBooks([...books, response]);

        if (!response) {
          throw new Error("Failed to add book");
        }

        postOwnedBook(response.id)

        setNewBookTitle("");
        setNewBookAuthor("");
        setNewBookDescription("");
        setNewBookGenre("");

      });

};

const handleSubmit = (e) => {
  e.preventDefault();

if (!handleValidation()) {
  const newBook = ({
      newBookTitle: newBookTitle,
      newBookAuthor: newBookAuthor,
      newBookDescription: newBookDescription,
      newBookGenre: newBookGenre
});
handleAddBook(newBook)
  setNewBookTitle("");
  setNewBookAuthor("");
  setNewBookDescription("");
  setNewBookGenre("");

};

}

  return (
    <div className="newBook">
      <h1> Add A New Book </h1>
      <h2>Enter the details below of the book you would like to add</h2>
      <p>All fields marked with a * must be filled out</p>
      <form onSubmit={handleSubmit}>
        <label>Enter in the book title *
          <input
            type="text"
            name="bookTitle"
            placeholder="Book Title"
            value={newBookTitle}
            onChange={(e) => setNewBookTitle(e.target.value)}
          />
        </label>
        <label>Enter in the author of the book *
          <input
            type="text"
            name="bookAuthor"
            placeholder="Book Author"
            value={newBookAuthor}
            onChange={(e) => setNewBookAuthor(e.target.value)}
          />
        </label>
        <label>Enter in the book description *
          <input
            type="text"
            name="bookDescription"
            placeholder="Book Description"
            value={newBookDescription}
            onChange={(e) => setNewBookDescription(e.target.value)}
          />
        </label>
        <label>Enter in the book genre *
          <input
            type="text"
            name="bookGenre"
            placeholder="Book Genre"
            value={newBookGenre}
            onChange={(e) => setNewBookGenre(e.target.value)}
          />
        </label>
        <button type="submit">Add Book</button>
      </form>

      {error !=="" ? <p>{error}</p> : <></>}
    </div>

  )

}

export default MyBooksForm



