import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";

import NavBar from "./Navbar";

import Hotdog from "./Hotdog";
import Burger from "./Burger";
import Taco from "./Taco";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/hotdog">
          <Hotdog />
        </Route>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/burger">
          <Burger />
        </Route>
        <Route exact path="/taco">
          <Taco />
        </Route>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
