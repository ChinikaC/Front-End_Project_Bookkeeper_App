import React from "react"
import BookList from "../components/BookList"

const OurBooks = ({books, postOwnedBook}) => {
    return (
        <>
        <h2>
            Our Books
        </h2>
        <BookList books={books} postOwnedBook={postOwnedBook} ></BookList>
        </>
    )
}

export default OurBooks;