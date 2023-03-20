import React from "react";
import BookList from "../components/BookList";

const MyBooks = ({ownedBooks, currentUser, newBook}) => {

    const userOwnedBooks = ownedBooks.filter((ownedBook) => {return ownedBook.user.id===1});
    const booksOwned = userOwnedBooks.map((ownedBook) => ownedBook.book)

    return(
        <>
            <BookList books = {booksOwned} newBook={newBook}></BookList>
        </>
    );
}

export default MyBooks;