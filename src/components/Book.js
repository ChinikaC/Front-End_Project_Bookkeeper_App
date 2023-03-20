const Book = ({ book, newBook }) => {

    const handleClick = (e) => {
        // moveToList(book);
        console.log(e);
        console.log("You have successfully added this book to your list!");
    }


    return (
        <li className="bookOnList">
            <h3>{book.title}</h3>
            <p><b>Description: </b>{book.description}</p>
            <button onClick={handleClick}>Add to my list</button>
        </li>
    )
}

export default Book;