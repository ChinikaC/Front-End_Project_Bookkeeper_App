import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <img src="" alt="Book-Keepers Logo"></img>
            <nav>
                <NavLink to="/Home">
                    Home
                </NavLink>
                <NavLink to="/OurBooks">
                    Our Books
                </NavLink>
                <NavLink to="/MyBooks">
                    My Account
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;