import React from "react";
import "./Hero.css";
// import "@fontsource/cabin";
// import "@fontsource/poppins";
import abc from "./Toyota.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="image">
        <div className="pro">
          <img src={abc} className="img" />
        </div>
      </div>
      <div className="title">
        <h1 id="a">
          Vehicle Ownership
          <br />
          Transfer<span className="ease"> Easy.</span>
        </h1>
        <br />
        <h6 id="b">
          We aim to streamline the vehicle owner transfer process that ensure a
          <br />
          smooth and secure transfer by eliminating the need for owners and
          <br />
          buyers to do manual long processes.
        </h6>
        <br />
      </div>
      <div id="d">
        <div>
          <button className="buttons">Transfer Now</button>
        </div>
        <h6>
          <a id="c" href="url">
            More Details<i class="arrow right"></i>
          </a>
        </h6>
      </div>
    </div>
  );
};

export default Hero;
