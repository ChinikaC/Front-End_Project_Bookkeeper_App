import { useState } from "react";

const MyBooksForm = ({ books, setBooks }) => {
  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookAuthor, setNewBookAuthor] = useState("");
  const [newBookDescription, setNewBookDescription] = useState("");
  const [newBookGenre, setNewBookGenre] = useState("");

  const handleAddBook =  (e) => {
    e.preventDefault();
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

        setNewBookTitle("");
        setNewBookAuthor("");
        setNewBookDescription("");
        setNewBookGenre("");

      });
    }

    return (
      <div>
        <h1> Add A New Book </h1>
        <form onSubmit={handleAddBook}>
          <input
            type="text"
            name="bookTitle"
            placeholder="Book Title"
            value={newBookTitle}
            onChange={(e) => setNewBookTitle(e.target.value)}
          />
          <input
            type="text"
            name="bookAuthor"
            placeholder="Book Author"
            value={newBookAuthor}
            onChange={(e) => setNewBookAuthor(e.target.value)}
          />
          <input
            type="text"
            name="bookDescription"
            placeholder="Book Description"
            value={newBookDescription}
            onChange={(e) => setNewBookDescription(e.target.value)}
          />
          <input
            type="text"
            name="bookGenre"
            placeholder="Book Genre"
            value={newBookGenre}
            onChange={(e) => setNewBookGenre(e.target.value)}
          />

          <button type="submit">Add Book</button>

        </form>
      </div>

    )
  
}

  export default MyBooksForm



