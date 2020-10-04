import React from "react";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import { hotdogImg } from "./imgUrls";
const Hotdog = () => {
  return (
    <div className="FoodItem">
      <h1>KOSHER hotdog</h1>
      <img className="FoodItem-img" src={hotdogImg} />
      <Link exact to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Hotdog;
