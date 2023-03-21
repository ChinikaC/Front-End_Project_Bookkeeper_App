const Book = ({ book, postOwnedBook, updateBookStatus, currentUser, ownedBooks, deleteOwnedBook }) => {

    const handleClick = (e) => {
        //console.log(e);
        //console.log("You have successfully added this book to your list!");
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
                <p className="bookDescription"><b>Description: </b>{book.description}</p>
                <div>
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
                </div>
            </li>
        )
    } else {
        return (
            <li className="bookOnList">
                <h3 className="bookTitle">{book.title}</h3>
                <p className="bookDescription"><b>Description: </b>{book.description}</p>
                <button onClick={handleClick} id={book.id} className="bookButton">Add to my list</button>
            </li>
        )
    }
}

export default Book;