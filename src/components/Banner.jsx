import React from "react";
import mountainImage from "../../src/assets/chris-koeth-resize.jpg";
import "./Banner.css";

const Banner = () => (
  <div className="banner">
    <img src={mountainImage} alt="Mountain Peak" className="banner-image" />
    <h1 className="banner-text lato-bold">
      Elevating New Zealand’s <br /> Marketing Landscape!
    </h1>
  </div>
);

export default Banner;
