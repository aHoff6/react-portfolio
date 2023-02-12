/* eslint-disable jsx-a11y/alt-text */
import React from "react";


export default function MyWork() {
    
    return <div><h1>My Work</h1>
  <div className="picContainer">
   <figure className="workimg">
    <a href="https://ahoff6.github.io/01-HTML-Git-CSS-Challenge/">
        <img src={require("../assets/images/Horiseonpic.png")} class="myworkpics"></img>
      </a> 
      </figure>
      <figure className="workimg"> 
      <a href="https://golemancer-ctrl.github.io/project-wikiview/">
        <img src={require("../assets/images/HrryPotterFanPage.png")} class="myworkpics"></img>
      </a>
    </figure>
    <figure className="workimg"> 
      <a href="https://wdiwd-app.herokuapp.com/">
        <img src={require("../assets/images/WDIWDpic.png")} class="myworkpics"></img>
      </a>
    </figure>
    <figure className="workimg"> 
      <a href="https://whatever-marketplace.herokuapp.com/">
        <img src={require("../assets/images/MarketPlacepic.png")} class="myworkpics"></img>
      </a>
    </figure>
      
  </div>
  </div>
}
