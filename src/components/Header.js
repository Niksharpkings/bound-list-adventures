import React, { useState } from 'react';
import Navigation from "./Navigation";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Hotels from "./Hotels";
import Activity from "./Activity";
import Login from "./Login";

function Header() {
  const [currentPage, handlePageChange] = useState("About");

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "My Flight Manager":
        return <Portfolio />;
      case "My Hotel Manager":
        return <Hotels />;
      case "My Activity Planner":
        return <Activity />;
      case "Contact Us":
        return <Contact />;
      case "Login/Register":
        return <Login />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            rel="noreferrer"
            href="/"
          >
            <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="BLA"/>
          </a>
        </div>
      </nav>
      {/* Pass the state value and the setter as props to NavTabs */}
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {/* Call the renderPage function passing in the currentPage */}
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;