import React from "react"
import BookList from "../components/BookList"

const OurBooks = ({books}) => {
    return (
        <>
        <div>
            Our Books
        </div>
        <BookList books={books}></BookList>
        </>
    )
}

export default OurBooks;