import { React, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useOnHoverOutside } from "../hooks/useOnHover";

const Header = ({ currentUser, setCurrentUser }) => {

    const dropdownRef = useRef(null); // Create a reference for dropdown container
    const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

    const closeHoverMenu = () => {
        setMenuDropDownOpen(false);
    };

    useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook

    const handleLogOut = () => {
        setCurrentUser(null);
    }

    return (
        <header>
            <div id="logoAndTitle">
                <img src="" alt="Book-Keepers Logo"></img>
                <h1>Book-Keepers</h1>
            </div>
            <nav>
                <NavLink to="/Home">
                    Home
                </NavLink>
                <NavLink to="/OurBooks">
                    Our Books
                </NavLink>
                <NavLink to="/MyBooks">
                    <div ref={dropdownRef} id="myAccountDropDown">
                        <button
                            className="no-style"
                            onMouseOver={() => setMenuDropDownOpen(true)}
                        >
                            My Account
                        </button>

                        {isMenuDropDownOpen && <button className="no-style" onClick={handleLogOut}>Log out</button>}
                    </div>
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;