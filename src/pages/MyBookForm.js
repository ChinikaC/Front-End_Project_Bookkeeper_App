import { useState } from "react";

const MyBooksForm = ({onAddBook}) => {
  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookAuthor, setNewBookAuthor] = useState("");
  const [newBookDescription, setNewBookDescription] = useState("");
  const [newBookGenre, setNewBookGenre] = useState("");

  const handleAddBook = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newBookTitle,
        author: newBookAuthor,
        description: newBookDescription,
        genre: newBookGenre,
        ownedBooks: [],
      }),
    });

    if (!response.ok) {
        throw new Error("Failed to add book");
      }

    const newBook = await response.json();
    onAddBook(newBook); // Call onAddBook with the new book to add it to MyBooks
    setNewBookTitle("");
    setNewBookAuthor("");
    setNewBookDescription("");
    setNewBookGenre("");
  };

  return (
    <div>
        <h1> Add A New Book to your Reading List </h1>
    <form onSubmit={handleAddBook}>
      <input
        type="text"
        placeholder="Book Title"
        value={newBookTitle}
        onChange={(e) => setNewBookTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Book Author"
        value={newBookAuthor}
        onChange={(e) => setNewBookAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Book Description"
        value={newBookDescription}
        onChange={(e) => setNewBookDescription(e.target.value)}
      />
      <input
        type="text"
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



