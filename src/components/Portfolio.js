import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "",
    date: "08/22/2022 at 5:00PM",
    time: "Hyatt Hotel China",
    departure: "Los Angeles - LAX",
    arrival: "Haneda Internation Airport",
    image: "/img/HJapan.jpg",
    description: "Business Trip To Japan",
    live: "/",
  },
  {
    id: 1,
    title: "",
    date: "08/22/2022 at 5:00PM",
    time: "Hyatt Hotel China",
    departure: "Los Angeles - LAX",
    arrival: "Beijing Internation Airport",
    image: "/img/HChina.jpg",
    description: "Business Trip To China",
    live: "/",
  },
  {
    id: 2,
    date: "08/22/2022 at 5:00PM",
    time: "Hyatt Hotel China",
    image: "/img/MGermany.jpg",
    departure: "Los Angeles Internation - LAX",
    arrival: "Frankfurt Internation Airport",
    description: "Business Trip To Germany",
    live: "/",
  },

];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">My Flight Manager</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;