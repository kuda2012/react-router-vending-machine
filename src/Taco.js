import React from "react";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import "./FoodItem.css";
import { tacoImg } from "./imgUrls";
const Taco = () => {
  return (
    <div className="FoodItem">
      <h1>Yo quiero Taco Bell!</h1>
      <img className="FoodItem-img" src={tacoImg} />
      <Link exact to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Taco;
