import devitoBook from './images/devitoBook.jpeg';
import React, { useState, useRef } from "react";
import { useOnHoverOutside } from "../hooks/useOnHover";

import 'react-tippy/dist/tippy.css'
import { Tooltip } from "react-tippy";

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
          {/* <img src={devitoBook} alt="image of Danny Devito cokouring book" /> */}
        </div>
        <div>
          Blurb
        </div>
      </article>
      <h2>Books by Genre</h2>
      <article id="bookByGenre">
        <Tooltip
          title="Distopian fiction is about something or other, idk"
          position="bottom-end">
          <button>Dystopian Fiction
          </button>
        </Tooltip>
        <button >Coming-Of-Age Fiction</button>
        <button>Regency Romance</button>
        <button>Literary Fiction</button>
        <button>High Fantasy</button>
        <button>Science Fiction</button>
        <button>Crime Fiction</button>
        <button>Political Satire</button>
        <button>Magical Realism</button>
        <button>Modernist fiction</button>
        <button >Autobiographical fiction</button>
        <button>Gothic Fiction</button>
      </article>

    </section>
  )
}

export default Home;

