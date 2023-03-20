import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <img src="" alt="Book-Keepers Logo"></img>
            <nav>
                <NavLink to="/home">
                    Home
                </NavLink>
                <NavLink to="/our_books">
                    our_books
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;