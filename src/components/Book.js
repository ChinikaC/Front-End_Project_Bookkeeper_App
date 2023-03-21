const Book = ({ book, postOwnedBook}) => {

    const handleClick = (e) => {
        console.log(e);
        console.log("You have successfully added this book to your list!");
        postOwnedBook(book.id)
    }

    if (document.URL === "http://localhost:3000/MyBooks") {
        return (
            <li className="bookOnList">
                <h3 className="bookTitle">{book.title}</h3>
                <p className="bookDescription"><b>Description: </b>{book.description}</p>
                <select
                    onChange={handleClick}
                    name="BookStatus">
                    <option value="filter">Change Status</option>
                    <option value="to-read">To Read</option>
                    <option value="reading">Reading</option>
                    <option value="read">Read</option>
                </select>
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