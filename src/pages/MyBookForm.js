import { useState } from "react";

const MyBooksForm = ({onAddBook}) => {
  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookAuthor, setNewBookAuthor] = useState("");
  const [newBookDescription, setNewBookDescription] = useState("");
  const [newBookGenre, setNewBookGenre] = useState("");

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
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
      onAddBook(newBook); 
      setNewBookTitle("");
      setNewBookAuthor("");
      setNewBookDescription("");
      setNewBookGenre("");
    } catch (error) {
      console.log(error);
    }
  };
  




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



