import { React, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useOnHoverOutside } from "../hooks/useOnHover";
import logo from "../assets/bookkeeperslogo.png";

const Header = ({ currentUser, setCurrentUser }) => {

    const dropdownRef = useRef(null); // Create a reference for dropdown container
    const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const books = [
        { name: "Jack and the Beanstalk", author: "RD", description: "whatever" }
    ];


    const closeHoverMenu = () => {
        setMenuDropDownOpen(false);
    };

    useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook

    const handleLogOut = () => {
        setCurrentUser(null);
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        books.filter((book) => {
            return book.name.match(searchInput);
        });
    }

    return (
        <div>
            <header id="logoAndTitle">
                <img src={logo} alt="Book-Keepers Logo" id="logo" />
                <h1>Book-Keepers</h1>
            </header>
            <nav>
                <ul>
                    <li><NavLink to="/home">
                        Home
                    </NavLink></li>
                    <li><NavLink to="/OurBooks">
                        Our Books
                    </NavLink></li>
                    <li><NavLink to="/MyBooks">
                        <div ref={dropdownRef} id="myAccountDropDown">
                            <button
                                className="no-style"
                                onMouseOver={() => { if (currentUser != null) { setMenuDropDownOpen(true) } }}>
                                My Account
                            </button>

                            {isMenuDropDownOpen && <button className="no-style" onClick={handleLogOut}>Log out</button>}
                        </div>
                    </NavLink></li>
                    <li><NavLink to="/SignUp">
                        Sign Up
                    </NavLink></li>
                </ul>
                <div id="searchBar">
                <input
                    type="text"
                    placeholder="Search Here"
                    onChange={handleChange}
                    value={searchInput} />
                    </div>
            </nav>
        </div>
    )
}

export default Header;