import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="overlay">
        <div className="banner-info">
          <h1 className="fs-1 fw-bold mb-4">Where will you go next?</h1>
          <p className="text-light">
            Welcome to Trawell, carefully crafted for travelers and adventurers.
            Pack your bags, hit the road and don't forget to write down all of
            your amazing stories!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
