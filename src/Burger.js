import React from "react";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import "./FoodItem.css";
import { burgerImg } from "./imgUrls";
const Burger = () => {
  return (
    <div className="FoodItem">
      <h1>Wagyu Burger. Deluxe!</h1>
      <img className="FoodItem-img" src={burgerImg} />
      <Link exact to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Burger;
