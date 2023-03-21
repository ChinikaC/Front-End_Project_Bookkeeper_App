import React from "react";
import BookList from "../components/BookList";

const MyBooks = ({ ownedBooks, currentUser, newBook,users,setCurrentUser }) => {

    const userOptions = users.map((user) => {
        return (
            <option key={user.id} value={user.id}>
                {user.fullName}
            </option>
        )
    })

    const handleLogIn = (e) => {
        const userToLogIn = users.filter(user => user.id == e.target.value);
        console.log(e.target.value)
        console.log(userToLogIn)
        setCurrentUser(userToLogIn[0])
        console.log(currentUser);
    }

    if (currentUser === null) {
        return (
            <div>
                Please sign in:
                <select
                    onChange={handleLogIn}
                    name="Users">
                <option value="select user">Select a user</option>
                {userOptions}
                </select>
            </div>
        );
    } else {
    
    const userOwnedBooks = ownedBooks.filter((ownedBook) => { return ownedBook.user.id === currentUser.id });
    const booksOwned = userOwnedBooks.map((ownedBook) => ownedBook.book)

    return (
        <>
            <div>
                Hello
            </div>
            <BookList books={booksOwned} newBook={newBook}></BookList>
        </>
    );
    }
    }
    export default MyBooks;