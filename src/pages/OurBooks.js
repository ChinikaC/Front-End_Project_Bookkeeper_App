import React, { useEffect, useState } from "react"
import BookList from "../components/BookList"

const OurBooks = ({ books, postOwnedBook }) => {

    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        setFilteredBooks(books)}, [books])

    const genres = books.map(book => book.genre)

    const uniqueGenres = genres.filter((genre, index) => { return genres.indexOf(genre) === index })

    const listOfGenres = uniqueGenres.map((genre, index) => {
        return (
            <option key={index} value={genre}>
                {genre}
            </option>
        )
    })

    const filterBooks = (e) => {
        if (e.target.value === "all") {
            setFilteredBooks(books);
        } else {
            console.log(e.target.value)
            //filter books and set filtered books to that
            const filtered = books.filter(book => { return book.genre === e.target.value })
            setFilteredBooks(filtered)
        }
    }

    return (
        <>
            <h2>
                Our Books
            </h2>
            <div>
                Filter by genre:

                <select
                    onChange={filterBooks}
                    name="BookStatus">
                    <option value="all">All books</option>
                    {listOfGenres}
                </select>
            </div>
            <BookList books={filteredBooks} postOwnedBook={postOwnedBook} ></BookList>
        </>
    )
}

export default OurBooks;