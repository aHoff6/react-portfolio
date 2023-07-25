import React from "react";

export default function MyWork() {
  const projects = [
    {
      name: "Weather Dashboard",
      imgSrc: require("../assets/images/weatherdashPic.png"),
      alt: "Weather Dashboard",
      deployedLink: "https://ahoff6.github.io/weather-dash/",
      githubLink: "https://github.com/ahoff6/weather-dash",
    },
    {
      name: "Harry Potter Fan Page",
      imgSrc: require("../assets/images/HrryPotterFanPage.png"),
      alt: "Harry Potter Fan Page",
      deployedLink: "https://golemancer-ctrl.github.io/project-wikiview/",
      githubLink: "https://github.com/golemancer-ctrl/project-wikiview",
    },
    {
      name: "WDIWD",
      imgSrc: require("../assets/images/WDIWDpic.png"),
      alt: "WDIWD",
      deployedLink: "https://wdiwd-app.herokuapp.com/",
      githubLink: "https://github.com/cbinder705/TBD-WDIWD-",
    },
    {
      name: "Marketplace",
      imgSrc: require("../assets/images/MarketPlacepic.png"),
      alt: "Marketplace",
      deployedLink: "https://whatever-marketplace.herokuapp.com/",
      githubLink: "https://github.com/djbalabis/FP-Marketplace-client",
    },
    {
      name: "Note Taker",
      imgSrc: require("../assets/images/notetakerhp.png"),
      alt: "Note Taker",
      deployedLink: "https://young-falls-57358.herokuapp.com/",
      githubLink: "https://github.com/ahoff6/note-taker-challenge",
    },
    {
      name: "Password Generator",
      imgSrc: require("../assets/images/passwordgeneratorPic.png"),
      alt: "Password Generator",
      deployedLink: "https://ahoff6.github.io/Password-Generator-Challenge/",
      githubLink: "https://github.com/ahoff6/Password-Generator-Challenge",
    },
  ];

  return (
    <div>
      <h1 className="title">Portfolio</h1>
      <div className="workPicContainer">
        {projects.map((project, index) => (
          <figure key={index} className="workimg">
            <a href={project.deployedLink}>
              <img
                src={project.imgSrc}
                alt={project.alt}
                className="myworkpics"
              />
            </a>
            <figcaption className="figcaption">
              <div className="hoverbox">
                <a href={project.deployedLink} className="hoverbutton">
                  View Deployed Site
                </a>
                <a href={project.githubLink} className="hoverbutton">
                  View GitHub Repo
                </a>
              </div>
              <div className="workTitle">{project.name}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}