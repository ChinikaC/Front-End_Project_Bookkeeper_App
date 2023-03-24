 import { React, useRef, useState } from "react";
 import { NavLink } from "react-router-dom";
 import { useOnHoverOutside } from "../hooks/useOnHover";
 import logo from "../pages/images/finalLogo.PNG";

 const Header = ({currentUser, setCurrentUser, setCurrentFilter}) => {

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

     const handleClick = () => {
         setCurrentFilter("all")
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
         <header>
             <div id="logoAndTitle">
             <div className="titles-group" >
                     <h1 id="title">T</h1>
                     <h1 id="title">B</h1>
                     <h1 id="title"> K</h1>
                 </div>
                 <NavLink to="/home">
                     <img src={logo} alt="Book-Keepers Logo" id="logo" />
                 </NavLink>
               
             </div>
             <nav>
                 <NavLink to="/home">
                     <button className="nav-button">Home</button>
                 </NavLink>
                 <NavLink to="/OurBooks">
                     <button className="nav-button" onClick={handleClick}>Our Books</button>
                 </NavLink>
                 <NavLink to="/MyBooks">
                     <div ref={dropdownRef} className="nav-button">
                         <button
                             className="nav-button"
                             onMouseOver={() => { if (currentUser != null) { setMenuDropDownOpen(true) } }}
                         >
                             My Account
                         </button>

                         {isMenuDropDownOpen &&
                             <div className="dropdown-menu">
                                 <button className="nav-button" onClick={handleLogOut}>Log out</button>
                             </div>}
                     </div>
                 </NavLink>
                 <NavLink to="/SignUp">
                     <button className="nav-button">Sign Up</button>
                 </NavLink>
             </nav>
             <div id="searchBar">
                 <input
                     type="text"
                     placeholder="Search Here"
                     onChange={handleChange}
                     value={searchInput} />
             </div>
         </header>
     )
 }

 export default Header;

