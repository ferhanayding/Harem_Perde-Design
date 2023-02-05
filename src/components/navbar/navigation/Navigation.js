import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = ({ className, setVisible }) => {
  return (
    <ul className={className}>
      <li>
        <NavLink
          exact
          to="/"
          className="hover__underline_link"
          onClick={() => setVisible(false)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className="hover__underline_link"
          onClick={() => setVisible(false)}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className="hover__underline_link"
          onClick={() => setVisible(false)}
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/ourworks"}
          className="hover__underline_link"
          onClick={() => setVisible(false)}
        >
          Works
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
