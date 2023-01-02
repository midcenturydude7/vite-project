import React from "react";
import largeLogo from "../img/react-icon-large.png";

function Main() {
  return (
    <main className="main-content__container">
      <h1 className="main-content__title">Fun facts about React</h1>
      <ul className="main-content__list">
        <li className="main-content__list-item">Was first released in 2013</li>
        <li className="main-content__list-item">Was originally created by Jordan Walke</li>
        <li className="main-content__list-item">Has well ove 100k stars on Github</li>
        <li className="main-content__list-item">Is maintained by Facebook</li>
        <li className="main-content__list-item">Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}

export default Main;
