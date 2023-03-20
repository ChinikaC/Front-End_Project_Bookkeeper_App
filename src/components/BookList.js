import Book from "./Book";

const BookList = ({books, newBook}) => {

    const bookList = books.map((book,index) => {
        return(
            <Book book = {book} key = {index} newBook = {newBook}/>
        )
    })

    return(
        <ul className = "bookList">
            {bookList}
        </ul>
    );
}

export default BookList;