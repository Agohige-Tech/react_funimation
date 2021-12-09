import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="bannerMessage">
        <div className="bannerMessageDescription">
          <h1>If it's Anime, it's Funimation.</h1>
          <p>
            Watch over 15,000 hours of anime anywhere, ad-free. Only thing
            missing are the snacks.
          </p>
        </div>
        <button>WATCH NOW</button>
      </div>
    </div>
  );
}

export default Banner;
