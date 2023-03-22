import Book from "./Book";

const BookList = (
    {books, postOwnedBook,updateBookStatus,currentUser,ownedBooks,deleteOwnedBook,updateBookRating}
    ) => {
    const bookList = books.map((book, index) => {
        return(
            <Book 
            book = {book} 
            key = {index} 
            postOwnedBook={postOwnedBook} 
            updateBookStatus={updateBookStatus} 
            updateBookRating={updateBookRating}
            currentUser={currentUser} 
            ownedBooks={ownedBooks} 
            deleteOwnedBook={deleteOwnedBook}/>
        )
    })

    return(
        <ul className = "bookList">
            {bookList}
        </ul>
    );
}

export default BookList;