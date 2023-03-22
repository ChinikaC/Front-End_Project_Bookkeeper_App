<<<<<<< HEAD
import React from "react";
import SkillsButton from "./SkillsButton";
=======
import React, {useState} from "react";
// import devitoBook from './images/devitoBook.jpeg';
>>>>>>> 75b09ab2a02097b2342bca79de3db4a12b4ae4ec

const Home = () => {
    const [isHovering, setIsHovering] = useState("");

    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };

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
<<<<<<< HEAD
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
=======
                <button>Thriller (these buttons need better styling)</button>
                <button>Classics</button>
                <button>Non-Fiction</button>
                <button>Horror</button>
                <div>
      <div>
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Hover over me
        </div>

        {isHovering && (
          <div>
            <h2>Horror Genre Info</h2>
            <h2>Scary</h2>
          </div>
        )}
      </div>
    </div>
  );
                
                <button>Adventure</button>
>>>>>>> 75b09ab2a02097b2342bca79de3db4a12b4ae4ec
            </article>
        </section>
    )
}

export default Home;