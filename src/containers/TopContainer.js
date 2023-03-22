import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.js';
import OurBooks from '../pages/OurBooks.js';
import NavBar from '../header-and-footer/Navbar';
import MyBooks from "../pages/MyBooks.js";
import UserForm from "../pages/UserForm.js";
import MyBookForm from "../pages/MyBookForm.js";
import SignUp from "../pages/SignUp.js";

const TopContainer = () => {

    const [error, setError] = useState("");
    const [books, setBooks] = useState([]);
    const [users, setUsers] = useState([]);
    const [ownedBooks, setOwnedBooks] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [updateCurrentUser, setUpdateCurrentUser] = useState(null);
    const [addNewMyBook, setNewMyBook] = useState([]);


    useEffect(() => {
        fetchBooks();
        fetchUsers();
        fetchOwnedBooks();
    }, [])

    const fetchBooks = async () => {
        const response = await fetch("http://localhost:8080/books");
        const data = await response.json()
            .catch((err) => setError(err.message));
        setBooks(data);
    }

    const fetchUsers = async () => {
        const response = await fetch("http://localhost:8080/users");
        const data = await response.json()
            .catch((err) => setError(err.message));
        setUsers(data);
    }

    const fetchOwnedBooks = async () => {
        const response = await fetch("http://localhost:8080/ownedBooks");
        const data = await response.json()
            .catch((err) => setError(err.message));
        setOwnedBooks(data);
    }

    const postOwnedBook = (bookId) => {
        //check if the user already owns the book - i.e try to find if and if you can't go ahead
        if (currentUser !== null) {
            const doYouOwnThis = ownedBooks.filter((book) => { return book.book.id == bookId && book.user.id == currentUser.id })
            console.log(doYouOwnThis)
            if (doYouOwnThis.length === 0) {
                fetch("http://localhost:8080/ownedBooks", {
                    method: "POST",
                    headers:
                        { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        user: { id: currentUser.id },
                        book: { id: bookId }
                    })
                })
                    .then((response) => response.json())
                    .then((response) => {
                        setOwnedBooks([...ownedBooks, response]);
                        //console.log(`{user: {id:${currentUser.id} },book: {id:${bookId} }}`);
                        // Find the book id and the user id
                        // currentUser.id - to find the user id
                        // book id comes from the event - event.target.value 
                    });
                console.log("you can add that")
            } else {
                console.log("already owned")
            }
        }
    };

    const updateUserDetails = (updatedUser) => {
        fetch(`http://localhost:8080/users/${currentUser.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedUser)
        })

            .then((response) => response.json())
            .then((responseCurrentUser) => {
                const updatedUserDetails = users.map((user) => {
                    if (user.id === responseCurrentUser.id) {
                        return responseCurrentUser;
                    } else {
                        return user;
                    }
                })
                setUsers(updatedUserDetails)
                setUpdateCurrentUser(null);
                setCurrentUser(responseCurrentUser);
            });
    };

    const createNewUser = (newUser) => {
        fetch(`http://localhost:8080/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        })
            .then((response) => response.json())
            .then((response) => {
                setUsers([...users, response])
            });
    };


    if (error !== "") return <p>Error! {error}</p>;

    const handleAddBook = (newBook) => {
        setNewMyBook([...addNewMyBook, newBook]);
    };

    return (
        <>
            <Router>
                <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
                <Routes>
                    <Route path='/Home' element=
                        {
                            <Home />
                        } />
                    <Route path='/OurBooks' element=
                        {
                            <OurBooks books={books} postOwnedBook={postOwnedBook} />
                        } />
                    <Route path='/MyBooks' element=
                        {
                            <MyBooks ownedBooks={ownedBooks}
                                users={users} books={books}
                                currentUser={currentUser}
                                setCurrentUser={setCurrentUser}
                                fetchOwnedBooks={fetchOwnedBooks} />
                        } />
                    <Route path='/UserForm' element=
                        {
                            <UserForm
                                users={users}
                                setCurrentUser={setCurrentUser}
                                updateCurrentUser={updateCurrentUser}
                                updateUserDetails={updateUserDetails} />
                        } />
                    <Route path='/MyBookForm' element=
                        {
                            <MyBookForm
                                addNewMyBook={addNewMyBook}
                                setMyBooks={setNewMyBook}
                                onAddBook={handleAddBook} />
                        } />
                    <Route path='/SignUp' element=
                        {
                            <SignUp users={users} setUsers={setUsers} createNewUser={createNewUser} />
                        } />

                </Routes>
            </Router>
        </>
    )

};

export default TopContainer;