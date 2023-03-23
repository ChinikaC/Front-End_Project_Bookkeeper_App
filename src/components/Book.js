import ReactStars from "react-rating-stars-component";
import React from "react";
import bookImg from "../assets/free-book-clipart.png";

const Book = ({ book, postOwnedBook, updateBookStatus, currentUser, ownedBooks, deleteOwnedBook, updateBookRating}) => {

    const handleClick = (e) => {
        console.log("You have successfully added this book to your list!");
        postOwnedBook(book.id)
    }

    const handleStatusUpdate = (e) => {
        updateBookStatus(book.id, e.target.value)
        e.target.value = "filter"
    }

    if (document.URL === "http://localhost:3000/MyBooks") {

        const handleDelete = (e) => {
            deleteOwnedBook(book.id);
        }

        const ob = ownedBooks.filter((ownedBook) => { return ownedBook.book.id === book.id && ownedBook.user.id === currentUser.id })

        const ownedBook = ob[0];

        const ratingChanged = (newRating) => {
            updateBookRating(book.id,newRating);
        };

        let bookStatus = ob[0].status;
        if (bookStatus === "READING") {
            bookStatus = "Reading"
        } else if (bookStatus === "READ") {
            bookStatus = "Read"
        } else if (bookStatus === "TO_READ") {
            bookStatus = "To Read"
        }

        return (
            <li className="bookOnList">
                <h3 className="bookTitle">{book.title}</h3>
                <p className="bookAuthor"><b>By: </b>{book.author}</p>
                <p className="bookDescription"><b>Description: </b>{book.description}</p>
                <p className="bookGenre"><b>Genre: </b>{book.genre}</p>
                <div id="userButtons">
                    <select
                        onChange={handleStatusUpdate}
                        name="BookStatus">
                        <option value="filter" >Change Status</option>
                        <option value="TO_READ">To Read</option>
                        <option value="READING">Reading</option>
                        <option value="READ">Read</option>
                    </select>
                    <p>{bookStatus}</p>
                    <button onClick={handleDelete}>Remove Book</button>
                    <ReactStars
                        value={ownedBook.rating}
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
                </div>
            </li>
        )
    } else {
        return (
            <li className="bookOnList">
                <h3 className="bookTitle">{book.title}</h3>
                <p className="bookAuthor"><b>Author: </b>{book.author}</p>
                <p className="bookDescription"><b>Description: </b>{book.description}</p>
                <p className="bookGenre"><b>Genre: </b>{book.genre}</p>
                <div className="imageButton" onClick={handleClick}>
                <img src={bookImg} alt="Image of book" id={book.id} className="bookButton"/>
                <p>Add to My List</p>
                </div>
            </li>
        )
    }
}

export default Book;