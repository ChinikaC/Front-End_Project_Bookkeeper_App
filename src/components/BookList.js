import Book from "./Book";

const BookList = ({books, postOwnedBook,filterBooksByEnum}) => {
    const bookList = books.map((book, index) => {
        return(
            <Book book = {book} key = {index} postOwnedBook={postOwnedBook}/>
        )
    })

    return(
        <ul className = "bookList">
            {bookList}
        </ul>
    );
}

export default BookList;