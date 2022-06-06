import React from "react";
import Project from "./Project2";

const projects = [
  {
    id: 0,
    title: "",
    date: "08/22/2022 at 9:00PM",
    time: "Hyatt Grand Japan",
    image: "/img/HJapan.jpg",
    description: "Business Trip To Japan",
    live: "/",
  },
  {
    id: 1,
    title: "",
    date: "09/01/2022 at 11:00PM",
    time: "Hyatt Hotel China",
    image: "/img/HChina.jpg",
    description: "Business Trip To China",
    live: "/",
  },
  {
    id: 2,
    title: "",
    date: "09/20/2022 at 12:000PM",
    time: "Marriot Hotel Germany",
    image: "/img/MGermany.jpg",
    description: "Business Trip To Germany",
    live: "/",
  },

];

function Portfolio() {
    return (
      <div>
        <p className="content is-medium">My Hotel Manager</p>
        <hr />
  
        <Project projects={projects} />
      </div>
    );
  
    
  }
  
  export default Portfolio;