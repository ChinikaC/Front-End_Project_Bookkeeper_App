import React, {useState} from "react";
import BookList from "../components/BookList";

const MyBooks = ({ ownedBooks, users, books, currentUser, setCurrentUser }) => {
   
const [newBookTitle, setNewBookTitle] = useState("");
const [newBookAuthor, setNewBookAuthor] = useState("");
const [newBookDescription, setNewBookDescription] = useState("");
const [newBookGenre, setNewBookGenre] = useState("");

const handleAddBook = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: newBookTitle,
            author: newBookAuthor,
            description: newBookDescription,
            genre: newBookGenre,
            ownedBooks: []
        })
    });
    const newBook = await response.json();
    console.log(newBook);
    setNewBookTitle("");
    setNewBookAuthor("");
    setNewBookDescription("");
    setNewBookGenre("");
};

    const userOptions = users.map((user) => {
        return (
            <option key={user.id} value={user.id}>
                {user.fullName}
            </option>
        )
    })

    const handleLogIn = (e) => {
        const userToLogIn = users.filter(user => user.id == e.target.value);
        console.log(e.target.value)
        console.log(userToLogIn)
        setCurrentUser(userToLogIn[0])
        console.log(currentUser);
    }

    if (currentUser === null) {
        return (
            <div>
                Please sign in:
                <select
                    onChange={handleLogIn}
                    name="Users">
                    <option value="select user">Select a user</option>
                    {userOptions}
                </select>
            </div>
        );
    } else {

        const ownedBookIds = ownedBooks.map((ownedBook) => {
            if (ownedBook.user.id === currentUser.id) {
                return ownedBook.book.id
            }
        });
        const booksOwned = books.filter((book) => { return ownedBookIds.includes(book.id) })

        return (
            <>
                <div>
                    Hello {currentUser.fullName}
                </div>
                <div>
                    Edit Account Details:
                    <button>Edit</button>
                </div>
                <div>
                    Filter by book status:
                    <select
                        onChange={handleLogIn}
                        name="BookStatus">
                        <option value="filter">Filter By Book Status</option>
                        {userOptions}
                    </select>
                </div>
                <BookList books={booksOwned}></BookList>
            </>
        );
    }
}
export default MyBooks;