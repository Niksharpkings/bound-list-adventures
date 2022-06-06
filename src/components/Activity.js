import React from "react";
import Project from "./Project3";

const projects = [
  {
    id: 0,
    title: "",
    date: "08/24/2022 at 9:00AM",
    time: "Hyatt Grand Japan",
    image: "/img/Jtour.jpg",
    description: "Japanese 5-Star Tour",
    live: "/",
  },

];

function Portfolio() {
    return (
      <div>
        <p className="content is-medium">My Activity Planner</p>
        <hr />
  
        <Project projects={projects} />
      </div>
    );
  
    
  }
  
  export default Portfolio;