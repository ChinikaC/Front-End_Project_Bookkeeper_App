import React, { useEffect, useState } from "react";
import BookList from "../components/BookList";
import { NavLink } from "react-router-dom";
import background from '../assets/Library_pic.jpeg'
import Modal from "../components/Modal";

const MyBooks = ({ ownedBooks, users, books, currentUser, setCurrentUser, deleteUser }) => {

    const [currentList, setCurrentList] = useState([]);
    const [currentReadFilter, setCurrentReadFilter] = useState("filter");
    const [openModal, setOpenModal]= useState(false);

    useEffect(() => {
        getBooks();
    }, [])

    const deleteOwnedBook = (bookId) => {
        //find owned book by bookId and currentuser.id
        const ownedBook = ownedBooks.find(book => book.book.id === bookId && book.user.id === currentUser.id)
        fetch(`http://localhost:8080/ownedBooks/${ownedBook.id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: ""
        })
        const index = ownedBooks.indexOf(ownedBook);
        ownedBooks.splice(index, 1)
        getBooks();
    }

    const updateBookStatus = (bookId, newStatus) => {
        if (newStatus === "filter") {

        } else {
            const toUpdate = ownedBooks.filter((book) => {
                return book.book.id === bookId && book.user.id === currentUser.id
            });
            let bookToUpdate = toUpdate[0];
            bookToUpdate.status = newStatus;
            fetch(`http://localhost:8080/ownedBooks/${bookToUpdate.id}`, {
                method: "PUT",
                headers:
                    { "Content-Type": "application/json" },
                body: JSON.stringify(bookToUpdate)
            })
            filter(currentReadFilter);
        }
    }

    const updateBookRating = (bookId, newRating) => {
        //finding book
        const toUpdate = ownedBooks.filter((book) => {
            return book.book.id === bookId && book.user.id === currentUser.id
        });
        let bookToUpdate = toUpdate[0];
        bookToUpdate.rating = newRating;
        //putting update
        fetch(`http://localhost:8080/ownedBooks/${bookToUpdate.id}`, {
            method: "PUT",
            headers:
                { "Content-Type": "application/json" },
            body: JSON.stringify(bookToUpdate)
        })

        //fetch back from server
    }

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
        if (currentUser != null) {
            //get owned book Ids
            const userBooksIds = ownedBooks.map((book) => {
                if (book.user.id === currentUser.id) {
                    return book.book.id
                }
            })
            //retrieve a book once from the books array
            const userBooks = books.filter((book) => { return userBooksIds.includes(book.id) });
            setCurrentList(userBooks);
        }
    }

    const filter = (filt) => {
        if (filt === "filter") {
            getBooks();
        } else {
            //get status of all books and Id from owned book list
            const bookStatuses = ownedBooks.map((book) => {
                if (book.user.id === currentUser.id && JSON.stringify(book.status) == JSON.stringify(filt)) {
                    return book.book.id
                }
            })
            //retrieve a book once from the books array
            const userBooks = books.filter((book) => { return bookStatuses.includes(book.id) });
            setCurrentList(userBooks);
        }
    }

    const handleFilter = (e) => {
        setCurrentReadFilter(e.target.value);
        filter(e.target.value);
    }

    const userOptions = users.map((user) => {
        return (
            <option key={user.id} value={user.id}>
                {user.fullName}
            </option>
        )
    })

    const handleDelete = (e) => {
        deleteUser(currentUser.id);
    }


    if (currentUser === null) {
        return (
            <div className="signIn">
                <div>
                <h1>Sign In</h1>
                <p>Please select a user to sign in: </p>
                <select
                    onChange={handleLogIn}
                    name="Users">
                    <option value="select user">Select a user</option>
                    {userOptions}
                </select>
                </div>
            </div>
        );
    } else {

        return (
            <div className="myAccount">
                <h1>My Account</h1>
                <h2>
                    Hello {currentUser.fullName}!
                </h2>
                <div className="myAccountHeadings">
                <div>
                    Edit Account Details:
                    <button> <NavLink to="/UserForm">Edit</NavLink></button>
                </div>
                <div>
                    Filter by book status:
                    <select
                        onChange={handleFilter}
                        name="BookStatus">
                        <option value="filter">All your books</option>
                        <option value="TO_READ">To Read</option>
                        <option value="READING">Reading</option>
                        <option value="READ">Read</option>
                    </select>
                </div>
                <div>
                    Add New Book To List:
                    <button> <NavLink to="/MyBookForm"> Add Book </NavLink> </button>
                </div>
                <div>
                    Delete Account:
                <button className="modalButton" onClick={() => {
                    setOpenModal(true);
                }}>Delete Account</button>
                {openModal && <Modal currentUser={currentUser} deleteUser={deleteUser} closeModal={setOpenModal}/>}
                </div>
                </div>
                <BookList
                    books={currentList}
                    ownedBooks={ownedBooks}
                    currentUser={currentUser}
                    deleteOwnedBook={deleteOwnedBook}
                    updateBookStatus={updateBookStatus}
                    updateBookRating={updateBookRating}
                ></BookList>
            </div>
        );
    }
}
export default MyBooks;