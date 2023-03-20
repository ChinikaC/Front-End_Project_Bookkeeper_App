import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home.js';
import OurBooks from '../pages/our_books.js';
import NavBar from '../header-and-footer/navbar';

const TopContainer = () => {

    const [error, setError] = useState("");
    const [books, setBooks] = useState([]);
    const [users, setUsers] = useState([]);
    const [ownedBooks, setOwnedBooks] = useState([]);

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
        const response = await fetch("http://localhost:8080/ownedBooks/1");
        const data = await response.json()
            .catch((err) => setError(err.message));
        setOwnedBooks(data);
    }

    if (error !== "") return <p>Error! {error}</p>;

    return (
        <>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/home' element={
                        <Home />
                    } />
                    <Route path='/our_books' element={
                        <OurBooks />
                    } />
                </Routes>

            </Router>
        </>
    )

};

export default TopContainer;