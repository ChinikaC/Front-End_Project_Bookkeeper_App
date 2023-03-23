import React from "react";
import Slider from "react-slick";

import devitoBook from "./images/devitoBook.jpeg";
import devitoColouringPages from "./images/devColouringPage.jpeg";
import devitoColouringPages2 from "./images/devitoColouringPage.webp";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
};

const ImageSlider = () => {
  return (
    <Slider {...settings}>
      <div>
        <img
          src={devitoBook}
          alt="image of Danny Devito coloring book"
          style={{ width: "100%", margin: "auto" }}
        />
      </div>
      <div>
        <h3 className="peak-inside">Take A Peak Inside</h3>
        <img
          src={devitoColouringPages}
          alt="coloring pages"
          style={{ width: "100%", margin: "auto" }}
        />
      </div>
      <div>
        <img
          src={devitoColouringPages2}
          alt="coloring pages"
          style={{ width: "100%", margin: "auto" }}
        />
      </div>
    </Slider>
  );
};

export default ImageSlider;
