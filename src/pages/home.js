import "../home.css"
import devitoBook from './images/devitoBook.jpeg';
import starReview from './images/starRevieww.png';
import devitoColouringPages from './images/devColouringPage.jpeg'
import devitoColouringPages2 from './images/devitoColouringPage.webp'
import devitoColouringPages3 from './images/devitoColouringPageC.png'
import React, { useState, useRef, useEffect } from "react";
import bookkeepers from './images/finalLogo.PNG'
import { useOnHoverOutside } from "../hooks/useOnHover";
import Dystopianfiction from "../assets/genre_pictures/Dystopianfiction.png"
import 'react-tippy/dist/tippy.css'
import { Tooltip } from "react-tippy";
import { NavLink } from "react-router-dom";


const Home = ({ books, setCurrentFilter }) => {

    useEffect(() => {
        refreshGenres();
    }, [books])

    const handleClick = (e) => {
        setCurrentFilter(e.target.value)
    }
    const uniqueGenres = books.filter((value, index, self) => {
        return self.findIndex(v => v.genre === value.genre) === index
    })

    const refreshGenres = () => {
        const uniqueGenres = books.filter((value, index, self) => {
            return self.findIndex(v => v.genre === value.genre) === index
        })
    }
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
                        value={book.genre}
                        id={book.genre.replace(/\s+/g, '')}
                        className="frontPageGenres">
                        {book.genre}
                    </button>
                </NavLink>
            </Tooltip>
        )
    })


    return (
        <section id="home">
            <article id="theBookkeepers">
                <div>
                    <h2 className='tbk-titles'> The</h2>
                    <h2 className='tbk-titles' > Book </h2>
                    <h2 className='tbk-titles' > Keepers </h2>
                </div>
                <div id="tbk_HomePageLogoContainer">
                    <img id="tbk_HomePageLogoBig" src={bookkeepers} alt="image of a book" />
                </div>
            </article>

            <h2 className='bookOTDheader'>Our Book of the Day</h2>

            <article id="bookOfTheDay">
                <ul id="devitoList">import bookkeepers from './images/finalLogo.PNG'
                    <li className='list-item'>An awesome official Danny DeVito-inspired, biographical colouring book.</li>
                    <li className='list-item'>Ideal for an evening of relaxation and stress relief</li>
                    <li className='list-item'>Two copies of each image are provided</li>
                    <li className='list-item'>Perfect for the whole family!</li>

                </ul>

                <img src={devitoBook}
                    alt="image of Danny Devito cokouring book"
                    id="devitoColouringBook" />

                <div id='reviews'>
                    <h3> Read what some of our users are saying</h3>

                    <p>Aya H: I'll never need another colouring book again!</p>
                    <img src={starReview}
                        alt="star review"
                        className='starReview' />

                    <p>Ramiro R: Love me some Daddy Devito </p>
                    <img src={starReview}
                        alt="star review"
                        className='starReview' />

                    <p>Leah S: If I was Matilda I'd never want to be adopted! </p>
                    <img src={starReview}
                        alt="star review"
                        className='starReview' />
                </div>
            </article>
            <div>
                <h3 id='peak-inside'>Take A Peak Inside</h3>
                <div id="devitoPicHolder">
                    <img
                        className='devitoPic'
                        src={devitoColouringPages}
                        alt="colouring pages" />

                    <img
                        className='devitoPic'
                        src={devitoColouringPages3}
                        alt="colouring pages" />

                    <img
                        className='devitoPic'
                        src={devitoColouringPages2}
                        alt="colouring pages" />
                </div>
            </div>
            <h2>Books by Genre</h2>
            <article id="bookByGenre">
                {listOfGenres}
            </article>

        </section>
    )
}
export default Home;

