import React from "react";
import BookList from "../components/BookList";

const MyBooks = ({ ownedBooks, users, books, currentUser, setCurrentUser }) => {

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