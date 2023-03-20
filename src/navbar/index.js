import React from "react";
import NavLink from "react-router-dom";

const NavBar = () => {
    return (
        <>
        <nav>
                <NavLink to="src/pages/home.js">
                    Home
                </NavLink>
                <NavLink to="src/pages/our_books.js">
                    our_books
                </NavLink>
        </nav>
        </>
    )
}