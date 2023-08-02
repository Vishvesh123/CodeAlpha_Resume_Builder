import React from "react";

import { NavLink } from "react-router-dom";

import "../components/css/navBar.css";

function Navbar(props) {
  return (
    <div className="Nav">
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/">Summary</NavLink>
          </li>
          <li>
            <NavLink to="/heading">Heading</NavLink>
          </li>
          <li>
            <NavLink to="/education">Education</NavLink>
          </li>
          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
