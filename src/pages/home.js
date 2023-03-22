import React, { useState } from "react";
import devitoBook from './images/devitoBook.jpeg';

const Home = () => {
    const [isHovering, setIsHovering] = useState(false)
    const [whichbutton, setWhichButton] = useState(null)
    const summaries = { 
        "Dystopian Fiction": "Scary",
        "Coming-Of-Age Fiction": "Fiction"
}    


    const handleMouseOver = (e) => {
      setIsHovering(true);
      setWhichButton(e.target.value)
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };

    return (
        <section>
            <h2>Our Book of the Day</h2>
            <article id="bookOfTheDay">
                <div>
                    <ul className="list">
                        <li className="list-item">An awesome official Danny DeVito-inspired, biographical coloring book</li>
                        <li className="list-item">Perfect for relaxation and stress relief</li>
                        <li className="list-item">2 copies of each image, for two chances to color!</li>
                    </ul>
                </div>

                <div>
                    User Rating
                </div>
                <div>
                    <img src={devitoBook}
                        alt="image of Danny Devito colouring book"
                        style={{ width: "50%", margin: "auto" }} />
                </div>
                <div>
                    Blurb
                </div>
            </article>
            <h2>Books by Genre</h2>
            <article id="bookByGenre">
                <button onMouseOver={handleMouseOver}
           onMouseOut={handleMouseOut}>Dystopian Fiction</button>
                <button onMouseOver={handleMouseOver}
           onMouseOut={handleMouseOut}>Coming-Of-Age Fiction</button>
                <button>Regency Romance</button>
                <button>Literary Fiction</button>
                <button>High Fantasy</button>
                <button>Science Fiction</button>
                <button>Crime Fiction</button>
                <button>Political Satire</button>
                <button>Magical Realism</button>
                <button>Modernist fiction</button>
                <button onMouseOver={handleMouseOver}
           onMouseOut={handleMouseOut}>Autobiographical fiction</button>
                <button>Gothic Fiction</button>
            </article>
         <div id="button1">
            <button onMouseOver={handleMouseOver}
           onMouseOut={handleMouseOut}>Dystopian Fiction</button>
           {isHovering && (
            <div>
             <h2>About Dystopian Fiction</h2>
             <h2>Scary</h2>
             </div>
         )}
       </div>
            <div id="button2">
            <button onMouseOver={handleMouseOver}
           onMouseOut={handleMouseOut}>Coming-Of-Age Fiction</button>
           {isHovering && (
            <div>
             <h2>About fiction</h2>
             <h2>Scary</h2>
             </div>
         )}
            </div>

            {isHovering ?
<div>
<h2>{whichbutton}</h2>
<p>{summaries[whichbutton]}</p>
</div> :
null }
        </section>
    )
}

export default Home;

// const summaries = { "dystopian fiction": "scary"}
// const [ishovering, set...] = usestate(false)
// const [whichbutton ...] = usestate(null)

//handlemousehover = (e) => {
    //setishovering(true)
    //setwhichbutton(e.target.value)
//}

//<button onhover={handlemousehover} onmouseout={handlemouseout}/>dystopian fiction</button>

// {isHovering ?
// <div>
// <h2>{whichbutton}</h2>
// <p>{summaries[whichbutton]}
// </div> :
// null }