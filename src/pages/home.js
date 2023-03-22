import React, { useState, useRef } from "react";
import { useOnHoverOutside } from "../hooks/useOnHover";
// import devitoBook from './images/devitoBook.jpeg';
import 'react-tippy/dist/tippy.css'
import { Tooltip } from "react-tippy";
import { NavLink } from "react-router-dom";

const Home = ({ books, setCurrentFilter }) => {

  const handleClick = (e) => {
    setCurrentFilter(e.target.value)
  }

  const uniqueGenres = books.filter((value, index, self) => {
    return self.findIndex(v => v.genre === value.genre) === index 
  })
  
  const listOfGenres = uniqueGenres.map((book, index) => {
    return (
      <Tooltip
        title= {`Here's an example of a ${book.genre}:\n ${book.title} - ${book.description} \n Click here to find more ${book.genre} books!`}
        position="bottom-end"
        key={index}
        id={book.genre}>
        <NavLink to="/OurBooks">
          <button
            onClick={handleClick}
            value={book.genre}>
            {book.genre}
          </button>
        </NavLink>
      </Tooltip>
    )
  })

  return (
    <section>
      <h2>Our Book of the Day</h2>
      <article id="bookOfTheDay">
        <div>
          User Review
        </div>
        <div>
          User Rating
        </div>
        <div>
          Book Picture
          {/* <img src={devitoBook} alt="image of Danny Devito cokouring book" /> */}
        </div>
        <div>
          Blurb
        </div>
      </article>
      <h2>Books by Genre</h2>
      <article id="bookByGenre">
        {listOfGenres}
      </article>

    </section>
  )
}

export default Home;

