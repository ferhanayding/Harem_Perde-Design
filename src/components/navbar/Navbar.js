import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
const Navbar = () => {
  return (
    <nav className="navbar__container">
      <div className="navbar__wrapper">
        <div className="navbar__left">LOGO</div>
        <div className="navbar__center">
          <ul>
            <li>
              <NavLink exact to="/" className="hover__underline_link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover__underline_link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} className="hover__underline_link">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to={"/ourworks"} className="hover__underline_link">
                Our Works
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar__right"></div>
      </div>
    </nav>
  );
};

export default Navbar;
