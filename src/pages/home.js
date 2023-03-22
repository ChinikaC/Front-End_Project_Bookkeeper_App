import React, {useState} from "react";
// import devitoBook from './images/devitoBook.jpeg';

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
            </article>
        </section>
    )
}

export default Home;