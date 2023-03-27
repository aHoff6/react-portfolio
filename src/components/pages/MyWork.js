import React from "react";

export default function MyWork() {
  return (
    <div>
      <h1 className="title">My Work</h1>
      <div className="workPicContainer">
        <figure className="workimg">
          <a href="https://ahoff6.github.io/weather-dash/">
            <img
              src={require("../assets/images/weatherdashPic.png")}
              alt="weather dash"
              className="myworkpics"
            ></img>
          </a>
        </figure>
        <figure className="workimg">
          <a href="https://golemancer-ctrl.github.io/project-wikiview/">
            <img
              src={require("../assets/images/HrryPotterFanPage.png")}
              alt="harry potter"
              className="myworkpics"
            ></img>
          </a>
        </figure>
        <figure className="workimg">
          <a href="https://wdiwd-app.herokuapp.com/">
            <img
              src={require("../assets/images/WDIWDpic.png")}
              alt="wdiwd"
              className="myworkpics"
            ></img>
          </a>
        </figure>
        <figure className="workimg">
          <a href="https://whatever-marketplace.herokuapp.com/">
            <img
              src={require("../assets/images/MarketPlacepic.png")}
              alt="marketplace"
              className="myworkpics"
            ></img>
          </a>
        </figure>
        <figure className="workimg">
          <a href="https://young-falls-57358.herokuapp.com/">
            <img
              src={require("../assets/images/notetakerhp.png")}
              alt="notetaker"
              className="myworkpics"
            ></img>
          </a>
        </figure>
        <figure className="workimg">
          <a href="https://ahoff6.github.io/Password-Generator-Challenge/">
            <img
              src={require("../assets/images/passwordgeneratorPic.png")}
              alt="passwordgenerator"
              className="myworkpics"
            ></img>
          </a>
        </figure>
      </div>
    </div>
  );
}