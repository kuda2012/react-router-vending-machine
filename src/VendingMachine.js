import React from "react";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import "./VendingMachine.css";

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <h3>
        Hello. Welcome to the Hot food vending machine. What would you like to
        consume?
      </h3>

      <img
        className="VendingMachine-img"
        src="https://previews.123rf.com/images/sudowoodo/
             sudowoodo1907/sudowoodo190700012/127313126-cute-cartoon-vending-m
             achine-drawing-set-automated-snack-food-machines
             -with-drink-bottles-chips-and-.jpg"
      />
    </div>
  );
};

export default VendingMachine;
