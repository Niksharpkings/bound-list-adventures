import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">My Resume</p>
        <hr />

        <a
          className="button is-primary"
          href={process.env.PUBLIC_URL + "/"}
          rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume - Coming Soon</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">My Skills</p>
        <hr />
        <ul>
            <li>HTML, CSS, Javascript, PHP, MySQL, Mongodb</li>
            <li>Github Repo</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;