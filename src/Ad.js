import React from "react";
import "./Ad.css";

function Ad() {
  return (
    <div className="adSpace">
      <video id="vid" muted autoplay="autoplay" loop playsinline>
        <source
          src="https://storfrontcommon.s3.amazonaws.com/videos/eda5cb20-2efb-47ec-9f47-5af546833f50.mp4"
          type="video/mp4"
        />
      </video>
      <div className="adContent">
        <div className="adText">
          <h1> Stream Ad-Free Anime with Premium Plus for $7.99 a month</h1>
          <p>
            Enjoy over 10,000 episodes and movies from our huge library of subs
            and dubs, featuring a deep catalog of big hits, fan favorites and
            all-time classics, as well as the latest shows out of Japan.
          </p>
        </div>
        <button>Start My Free Trial</button>
      </div>
    </div>
  );
}

export default Ad;
