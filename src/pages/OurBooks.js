import React from "react"
import BookList from "../components/BookList"

const OurBooks = ({books, postOwnedBook}) => {
    return (
        <>
        <div>
            Our Books
        </div>
        <BookList books={books} postOwnedBook={postOwnedBook} ></BookList>
        </>
    )
}

export default OurBooks;