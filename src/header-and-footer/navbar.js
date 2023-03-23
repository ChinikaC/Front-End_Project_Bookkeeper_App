import { React, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useOnHoverOutside } from "../hooks/useOnHover";
import logo from "../assets/bookkeeperslogo.png";

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
                <img src={logo} alt="Book-Keepers Logo" id="logo"/>
            </div>
            <nav>
                <NavLink to="/home">
                    Home
                </NavLink>
                <NavLink to="/OurBooks">
                    Our Books
                </NavLink>
                <NavLink to="/MyBooks">
                    <div ref={dropdownRef} id="myAccountDropDown">
                        <button
                            className="no-style"
                            onMouseOver={() => {if(currentUser!=null) {setMenuDropDownOpen(true)}}}
                        >
                            My Account
                        </button>

                        {isMenuDropDownOpen && <button className="no-style" onClick={handleLogOut}>Log out</button>}
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