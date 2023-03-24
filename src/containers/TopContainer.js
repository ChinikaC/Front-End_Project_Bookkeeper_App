import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.js';
import OurBooks from '../pages/OurBooks.js';
import NavBar from '../header-and-footer/Navbar';
import MyBooks from "../pages/MyBooks.js";
import UserForm from "../pages/UserForm.js";
import MyBookForm from "../pages/MyBookForm.js";
import SignUp from "../pages/SignUp.js";
import Footer from "../header-and-footer/footer"

const TopContainer = () => {

    const [error, setError] = useState("");
    const [books, setBooks] = useState([]);
    const [users, setUsers] = useState([]);
    const [ownedBooks, setOwnedBooks] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [currentFilter, setCurrentFilter] = useState("all");


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
        if (currentUser !== null) {
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
                });
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
                setUsers(updatedUserDetails);
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

    const deleteUser = (id) => {
        fetch(`http://localhost:8080/users/${id}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
    });

    setUsers(users.filter(user => user.id !== id))
    setCurrentUser(null);
        };


    const [theme, setTheme] = useState('light');
    const onOffButton = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    if (error !== "") return <p>Error! {error}</p>;

    return (
        <>
            <Router>
                <NavBar
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                    setCurrentFilter={setCurrentFilter} />
                <Routes>
                    <Route path='/Home' element=
                        {
                            <Home
                                setCurrentFilter={setCurrentFilter}
                                books={books}
                                />
                        } />
                    <Route path='/OurBooks' element=
                        {
                            <OurBooks
                                books={books}
                                postOwnedBook={postOwnedBook}
                                currentFilter={currentFilter}
                                setCurrentFilter={setCurrentFilter} />
                        } />
                    <Route path='/MyBooks' element=
                        {
                            <MyBooks
                                ownedBooks={ownedBooks}
                                users={users}
                                books={books}
                                currentUser={currentUser}
                                setCurrentUser={setCurrentUser}
                                deleteUser={deleteUser} 
                                />
                        } />
                    <Route path='/UserForm' element=
                        {
                            <UserForm
                                updateUserDetails={updateUserDetails} />
                        } />
                    <Route path='/MyBookForm' element=
                        {
                            <MyBookForm
                                setBooks={setBooks}
                                books={books} />
                        } />
                    <Route path='/SignUp' element=
                        {
                            <SignUp
                                users={users}
                                setUsers={setUsers}
                                createNewUser={createNewUser} />
                        } />
                </Routes>
                <div className="theme">
                    <button onClick={onOffButton}>Dark/Light Mode</button>
                </div>
            </Router>
            <div id="box"></div>
            <Footer>
            </Footer>
        </>
    )

};

export default TopContainer;