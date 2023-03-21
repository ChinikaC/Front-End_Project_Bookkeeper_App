const Book = ({ book, postOwnedBook,updateBookStatus}) => {

    const handleClick = (e) => {
        //console.log(e);
        //console.log("You have successfully added this book to your list!");
        postOwnedBook(book.id)
    }

    const handleStatusUpdate = (e) => {
        updateBookStatus(book.id,e.target.value)
        e.target.value="filter"
    }

    if (document.URL === "http://localhost:3000/MyBooks") {
        return (
            <li className="bookOnList">
                <h3 className="bookTitle">{book.title}</h3>
                <p className="bookDescription"><b>Description: </b>{book.description}</p>
                <select
                    onChange={handleStatusUpdate}
                    name="BookStatus">
                    <option value="filter" selected ="selected">Change Status</option>
                    <option value="TO_READ">To Read</option>
                    <option value="READING">Reading</option>
                    <option value="READ">Read</option>
                </select>
                <p></p>
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