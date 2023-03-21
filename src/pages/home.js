import React from "react";

const Home = () => {
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
                </div>
                <div>
                    Blurb
                </div>
            </article>
            <h2>Books by Genre</h2>
            <article id="bookByGenre">
                <button>Thriller (these buttons need better styling)</button>
                <button>Classics</button>
                <button>Non-Fiction</button>
                <button>Horror</button>
                <button>Adventure</button>
            </article>
        </section>
    )
}

export default Home;