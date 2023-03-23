import devitoBook from './images/devitoBook.jpeg';
import starReview from './images/starRevieww.png';
import devitoColouringPages from './images/devColouringPage.jpeg'
import devitoColouringPages2 from './images/devitoColouringPage.webp'
import React, { useState, useRef } from "react";
import bookkeepers from './images/bookDrawing.png'
import { useOnHoverOutside } from "../hooks/useOnHover";

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
                title={`Here's an example of a ${book.genre}:\n ${book.title} - ${book.description} \n Click here to find more ${book.genre} books!`}
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
        )})
    return (
            <section>
                <article id="theBookkeepers">
                    <div className='tbk-heading'>
                        <h2 className='tbk-titles'> The</h2>
                        <h2 className='tbk-titles' > Book </h2>
                        <h2 className='tbk-titles' > Keepers </h2>
                    </div>
                    <div className='bookkeepers-intro'>
                        <img src={bookkeepers} alt="image of a book" style={{ width: "50%", margin: "auto" }} />
                    </div>

                </article>

                <h2>Our Book of the Day</h2>

                <article id="bookOfTheDay">

                    <div>
                        <img src={devitoBook}
                            alt="image of Danny Devito cokouring book"
                            style={{ width: "100%", margin: "auto" }} />
                    </div>

                    <div>
                        <h3 className='peak-inside'>Take A Peak Inside</h3>
                        <img src={devitoColouringPages}
                            alt="colouring pages"
                            style={{ width: "100%", margin: "auto" }} />
                    </div>
                    <div>
                        <img src={devitoColouringPages2}
                            alt="colouring pages"
                            style={{ width: "100%", margin: "auto" }} />
                    </div>
                    <div>
                        <ul className='list'>
                            <li class='list-item'>An awesome official Danny DeVito-inspired, biographical colouring book</li>
                            <li className='list-item'>Perfect for relaxation and stress relief</li>
                            <li className='list-item'>You even get TWO copies of each image for two chances to colour!</li>
                        </ul>
                    </div>



                    <div className='reviews'>
                        <h3> Read what some of our users are saying</h3>

                        <p>Aya H : I'll never need another colouring book again!</p>
                        <img src={starReview}
                            alt="star review"
                            style={{ width: "20%", margin: "auto" }} />

                        <p>Ramiro R : Love me some Daddy Devito </p>
                        <img src={starReview}
                            alt="star review"
                            style={{ width: "20%", margin: "auto" }} />

                        <p>Leah S : If I was Matilda I'd never want to be adopted! </p>
                        <img src={starReview}
                            alt="star review"
                            style={{ width: "20%", margin: "auto" }} />
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

