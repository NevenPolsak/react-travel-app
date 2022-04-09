import React from "react";
import "./Video.css";
import cityVideo from "../assets/city.mp4";
import { Link } from "react-router-dom";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={cityVideo} type="video/mp4" />
      </video>

      <div className="content">
        <h1>City Travel</h1>
        <p>Explore the streets of world capitals</p>

        <div>
          <Link to="/training" className="btn">
            Training
          </Link>
          <Link to="/contact" className="btn btn-light">
            Launch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
