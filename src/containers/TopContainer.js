import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.js';
import OurBooks from '../pages/OurBooks.js';
import NavBar from '../header-and-footer/Navbar';
import MyBooks from "../pages/MyBooks.js";

const TopContainer = () => {

    const [error, setError] = useState("");
    const [books, setBooks] = useState([]);
    const [users, setUsers] = useState([]);
    const [ownedBooks, setOwnedBooks] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    // const []

    useEffect(() => {
        fetchBooks();
        fetchUsers();
        fetchOwnedBooks();
        setCurrentUser(users[1]);
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

    const postOwnedBook = (newBook) => {
        fetch("http://localhost:8080/ownedBooks", {
        method: "POST",
        headers:
         {"Content-Type": "application/json"},
         body: JSON.stringify(newBook),
        })
        .then((response) => response.json())
        .then((response) => {
            setOwnedBooks({...ownedBooks, response});
        });
    };

    
    if (error !== "") return <p>Error! {error}</p>;

    return (
        <>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/Home' element=
                    {
                        <Home />
                    } />
                    <Route path='/OurBooks' element=
                    {
                        <OurBooks books={books}/>
                    } />
                    <Route path='/MyBooks' element=
                    {
                        <MyBooks ownedBooks={ownedBooks} currentUser={currentUser} newBook={postOwnedBook}/>
                    } />
                </Routes>

            </Router>
        </>
    )

};

export default TopContainer;