/* eslint-disable jsx-a11y/alt-text */
import React from "react";


export default function MyWork() {
    
    return <div><h1 className="title">My Work</h1>
  <div className="workPicContainer">
  <figure className="workimg"> 
      <a href="https://ahoff6.github.io/weather-dash/">
        <img src={require("../assets/images/weatherdashPic.png")} className="myworkpics"></img>
      </a>
    </figure>
      <figure className="workimg"> 
      <a href="https://golemancer-ctrl.github.io/project-wikiview/">
        <img src={require("../assets/images/HrryPotterFanPage.png")} className="myworkpics"></img>
      </a>
    </figure>
    <figure className="workimg"> 
      <a href="https://wdiwd-app.herokuapp.com/">
        <img src={require("../assets/images/WDIWDpic.png")} className="myworkpics"></img>
      </a>
    </figure>
    <figure className="workimg"> 
      <a href="https://whatever-marketplace.herokuapp.com/">
        <img src={require("../assets/images/MarketPlacepic.png")} className="myworkpics"></img>
      </a>
    </figure>
    <figure className="workimg"> 
      <a href="https://young-falls-57358.herokuapp.com/">
        <img src={require("../assets/images/notetakerhp.png")} className="myworkpics"></img>
      </a>
    </figure>
    <figure className="workimg"> 
      <a href="https://ahoff6.github.io/Password-Generator-Challenge/">
        <img src={require("../assets/images/passwordgeneratorPic.png")} className="myworkpics"></img>
      </a>
    </figure>
    
      
  </div>
  </div>
}
