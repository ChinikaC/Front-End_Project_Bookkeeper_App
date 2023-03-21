import React, { useState } from "react";
import BookList from "../components/BookList";

const MyBooks = ({ ownedBooks, users, books, currentUser, setCurrentUser }) => {

    const [currentList, setCurrentList] = useState([]);

    const handleLogIn = (e) => {
        //find the user to log in
        const userToLogIn = users.filter(user => user.id == e.target.value);
        setCurrentUser(userToLogIn[0]);
        //get owned book Ids
        const userBooksIds = ownedBooks.map((book) => {
            if (book.user.id == e.target.value) {
                return book.book.id
            }
        })
        //retrieve a book once from the books array
        const userBooks = books.filter((book) => { return userBooksIds.includes(book.id) })
        setCurrentList(userBooks)
    }

    const getBooks = () => {
        //get owned book Ids
        const userBooksIds = ownedBooks.map((book) => {
            if (book.user.id === currentUser.id) {
                return book.book.id
            }
        })
        //retrieve a book once from the books array
        const userBooks = books.filter((book) => { return userBooksIds.includes(book.id) });
        console.log(userBooks);
        setCurrentList(userBooks);
    }

    const handleFilter = (e) => {
        if (e.target.value === "filter") {
            getBooks();
        } else {
            //get status of all books and Id from owned book list
            const bookStatuses = ownedBooks.filter((book) => { return book.user.id === currentUser.id })
            const en = JSON.stringify(e.target.value);
            //filter current list
            let filteredList = bookStatuses.filter((book) => { return JSON.stringify(book.status) == en })
            filteredList = filteredList.map((book) => { return book.book })
            console.log(filteredList)
            setCurrentList(filteredList);
        }
    }

    const userOptions = users.map((user) => {
        return (
            <option key={user.id} value={user.id}>
                {user.fullName}
            </option>
        )
    })

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
                        onChange={handleFilter}
                        name="BookStatus">
                        <option value="filter">Filter</option>
                        <option value="TO_READ">To Read</option>
                        <option value="READING">Reading</option>
                        <option value="READ">Read</option>
                    </select>
                </div>
                <BookList books={currentList} ></BookList>
            </>
        );
    }
}
export default MyBooks;