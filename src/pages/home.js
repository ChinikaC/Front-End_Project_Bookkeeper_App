import React from "react";
import SkillsButton from "./SkillsButton";

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
                <button>Dystopian Fiction</button>
                <button>Coming-Of-Age Fiction</button>
                <button>Regency Romance</button>
                <button>Literary Fiction</button>
                <button>High Fantasy</button>
                <button>Science Fiction</button>
                <button>Crime Fiction</button>
                <button>Political Satire</button>
                <button>Magical Realism</button>
                <button>Modernist fiction</button>
                <button onClick="SkillsButton">Autobiographical fiction</button>
                <button>Gothic Fiction</button>
            </article>
        </section>
    )
}

export default Home;