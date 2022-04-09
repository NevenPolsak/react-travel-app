import React from "react";
import "./Training.css";
import { Link } from "react-router-dom";
import Car from "../assets/car.jpg";
import Light from "../assets/light.jpg";

const Training = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>Training</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={Light} alt="" className="img" />
          </div>
          <div className="image-stack bottom">
            <img src={Car} alt="" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
