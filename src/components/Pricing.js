import React from "react";
import "./Pricing.css";
import { Link } from "react-router-dom";
import { pricing } from "./data";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="card-container">
          {
              pricing.map((price)=>(
                <div className="card" key={price.id}>
                <h3>-{price.title}-</h3>
                <span className="bar"></span>
                <p className="btc">1 BTC</p>
                <p>- 3 Days -</p>
                <p>- Views -</p>
                <p>- Featured -</p>
                <p>- Private Quarters -</p>
                <Link to="/contact" className="btn">
                  Books
                </Link>
              </div>
              ))
          }
       
      </div>
    </div>
  );
};

export default Pricing;
