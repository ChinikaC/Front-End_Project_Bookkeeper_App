import Book from "./Book";

const BookList = ({books, postOwnedBook,updateBookStatus}) => {
    const bookList = books.map((book, index) => {
        return(
            <Book book = {book} key = {index} postOwnedBook={postOwnedBook} updateBookStatus={updateBookStatus}/>
        )
    })

    return(
        <ul className = "bookList">
            {bookList}
        </ul>
    );
}

export default BookList;