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
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"/ourworks"}>Our Works</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar__right"></div>
      </div>
    </nav>
  );
};

export default Navbar;
