import React from "react";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import "./FoodItem.css";
import "./Navbar.css";
const NavBar = () => {
  return (
    <nav className="Navbar">
      <NavLink exact to="/hotdog">
        Hotdog
      </NavLink>
      <NavLink exact to="/burger">
        Burger
      </NavLink>
      <NavLink exact to="/taco">
        Taco
      </NavLink>
    </nav>
  );
};

export default NavBar;
