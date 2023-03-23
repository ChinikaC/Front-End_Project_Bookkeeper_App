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
        <section>
            <article id="theBookkeepers">
                <div className='tbk-heading'>
                    <h2 className='tbk-titles'> The</h2>
                    <h2 className='tbk-titles' > Book </h2>
                    <h2 className='tbk-titles' > Keepers </h2>
                </div>
                <div className='bookkeepers-intro'>
                    <img src={bookkeepers} alt="image of a book" style={{ width: "55%", margin: "auto" }} />
                </div>
            </article>

            <h2 className='bookOTDheader'>Our Book of the Day</h2>

            <article id="bookOfTheDay">

                <div className='devitoColouringBook'>
                    <img src={devitoBook}
                        alt="image of Danny Devito cokouring book"
                        style={{ margin: "auto" }} />
                </div>

                <div>
                    <ul className='list'>
                        <li class='list-item'>An awesome official Danny DeVito-inspired, biographical colouring book.</li>
                        <li className='list-item'>Ideal for an evening of relaxation and stress relief</li>
                        <li className='list-item'>Two copies of each image are provided</li>
                        <li className='list-item'>Perfect for the whole family!</li>

                    </ul>
                </div>
                </article>
                
                <div className='devitoColouringPageA'>
                    <img src={devitoColouringPages}
                        alt="colouring pages"
                        style={{ width: "100%", margin: "auto" }} />
                </div>

                <div className='devitoColouringPageC'>
                    <h3 className='peak-inside'>Take A Peak Inside</h3>
                    <img src={devitoColouringPages3}
                        alt="colouring pages" />
                </div>

                <div className='devitoColouringPageB'>
                    <img src={devitoColouringPages2}
                        alt="colouring pages" />
                </div>


                <div className='reviews'>
                    {/* <h3> Read what some of our users are saying</h3> */}
                    <div className='person-review'>
                        <p>Aya H : I'll never need another colouring book again!</p>
                        <img src={starReview}
                            alt="star review"
                            style={{ width: "20%", margin: "auto" }} />
                    </div>

                    <div className='person-review'>
                        <p>Ramiro R : Love me some Daddy Devito </p>
                        <img src={starReview}
                            alt="star review"
                            style={{ width: "20%", margin: "auto" }} />
                    </div>
                    <div className='person-review'>
                        <p>Leah S : If I was Matilda I'd never want to be adopted! </p>
                        <img src={starReview}
                            alt="star review"
                            style={{ width: "20%", margin: "auto" }} />
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


