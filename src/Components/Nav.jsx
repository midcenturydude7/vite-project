import React from "react";
import logo from "../img/react-icon-small.png";

function Nav() {
  return (
    <nav className="navbar-container">
      <img className="navbar-logo" src={logo}alt="React logo" />
      <h1 className="navbar-title">ReactFacts</h1>
      <h2 className="navbar-subtitle">React Course - Project 1</h2>
    </nav>
  );
}

export default Nav;
