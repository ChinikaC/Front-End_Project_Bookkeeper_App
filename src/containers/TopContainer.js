import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.js';
import OurBooks from '../pages/OurBooks.js';
import NavBar from '../header-and-footer/Navbar';
import MyBooks from "../pages/MyBooks.js";
import UserForm from "../pages/UserForm.js";
import UserList from "../pages/UserList.js";
import MyBookForm from "../pages/MyBookForm.js";

const TopContainer = () => {

    const [error, setError] = useState("");
    const [books, setBooks] = useState([]);
    const [users, setUsers] = useState([]);
    const [ownedBooks, setOwnedBooks] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [updateCurrentUser, setUpdateCurrentUser] = useState(null);
    const [myBooks, setMyBooks] = useState([]);


    useEffect(() => {
        fetchBooks();
        fetchUsers();
        fetchOwnedBooks();
    }, [])

    const logIn = (e) => {
        setCurrentUser(e);
    }

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
                    setOwnedBooks([ ...ownedBooks, response ]);
                    //console.log(`{user: {id:${currentUser.id} },book: {id:${bookId} }}`);
                    // Find the book id and the user id
                    // currentUser.id - to find the user id
                    // book id comes from the event - event.target.value 
                });
        }
    };

    const updateUserDetails = (updatedUser) => {
        fetch(`http://localhost:8080/users/${currentUser.id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedUser)
        })

        .then((response) => response.json())
        .then((responseCurrentUser) => {
            const updatedUserDetails = users.map((user) => {
                if(user.id === responseCurrentUser.id){
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


    if (error !== "") return <p>Error! {error}</p>;

    const handleAddBook = (newBook) => {
        setMyBooks([...myBooks, newBook]);
      };

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
                            <OurBooks books={books} postOwnedBook={postOwnedBook} />
                        } />
                    <Route path='/MyBooks' element=
                        {
                            <MyBooks ownedBooks={ownedBooks} users={users} books={books} currentUser={currentUser} setCurrentUser={setCurrentUser} />
                        } />
                    <Route path='/UserForm' element=
                        {
                            <UserForm users={users} setCurrentUser={setCurrentUser} updateCurrentUser={updateCurrentUser} updateUserDetails={updateUserDetails}/>
                        } />
                    <Route path='/UserList' element=
                        {
                            <UserList users={users} updateCurrentUser={updateCurrentUser} />
                        } />
                    <Route path='/MyBookForm' element= 
                    {
                        <MyBookForm myBooks={myBooks} setMyBooks={setMyBooks} />
                    } />
                        
                </Routes>
            </Router>
        </>
    )

};

export default TopContainer;