const Book = ({ book, postOwnedBook }) => {

    const handleClick = (e) => {
        console.log(e);
        console.log("You have successfully added this book to your list!");
        postOwnedBook(book.id)
    }


    return (
        <li className="bookOnList">
            <h3 className="bookTitle">{book.title}</h3>
            <p className="bookDescription"><b>Description: </b>{book.description}</p>
            <button onClick={handleClick} id={book.id} className="bookButton">Add to my list</button>
        </li>
    )
}

export default Book;