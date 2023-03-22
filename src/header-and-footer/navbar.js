import { React, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useOnHoverOutside } from "../hooks/useOnHover";
import logo from "../assets/bookkeeperslogo.png";

const Header = ({ currentUser, setCurrentUser, setCurrentFilter }) => {

    const dropdownRef = useRef(null); // Create a reference for dropdown container
    const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

    const closeHoverMenu = () => {
        setMenuDropDownOpen(false);
    };

    useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook

    const handleLogOut = () => {
        setCurrentUser(null);
    }

    const handleClick = () => {
        setCurrentFilter("all")
    }

    return (
        <header>
                <div id="logoAndTitle">
                    <NavLink to="/home">
                        <img src={logo} alt="Book-Keepers Logo" id="logo" />
                    </NavLink>
                    <h1>Book-Keepers</h1>
                </div>

                <nav>
                    <NavLink to="/home">
                        Home
                    </NavLink>
                    <NavLink to="/OurBooks">
                        <button className="nav-button" onClick={handleClick}>Our Books</button>
                    </NavLink>
                    <NavLink to="/MyBooks">
                        <div ref={dropdownRef} id="myAccountDropDown">
                            <button
                                className="nav-button"
                                onMouseOver={() => { if (currentUser != null) { setMenuDropDownOpen(true) } }}
                            >
                                My Account
                            </button>

                            {isMenuDropDownOpen && <button className="nav-button" onClick={handleLogOut}>Log out</button>}
                        </div>
                    </NavLink>
                    <NavLink to="/SignUp">
                        Sign Up
                    </NavLink>
                </nav>
        </header>
    )
}

export default Header;