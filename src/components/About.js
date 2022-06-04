import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">BoundListAdventures -  The Smart Itinerary Manager</p>
      <hr />
      <img className="pic" src={process.env.PUBLIC_URL + '/img/index.png'} alt="BLA"/>
      <p className="content is-italic mt-4">

      </p>
      <p className="content">
      Tripadvisory itinerary manager that allows the user to see there schedule flights And what activities they will be doing during their trip to their destination before heading back to their original location.
      </p>
    </div>
  );
}

export default About;