import React, { useState } from "react";

import useWindowSize from "../../hooks/useWindowSize";
import "./navbar.scss";
import Navigation from "./navigation/Navigation";
import Sidebar from "./sidebar/Sidebar";
import { useEffect, useRef } from "react";

const Navbar = () => {
  let menuRef = useRef();
  const { width } = useWindowSize();
  const [visible, setVisible] = useState(false);
  console.log(visible);
  useEffect(() => {
    if (visible) {
      let handler = (e) => {
        if (!menuRef.current.contains(e.target)) {
          setVisible(false);
          console.log(menuRef.current);
        }
      };

      document.addEventListener("mousedown", handler);

      return () => {
        document.removeEventListener("mousedown", handler);
      };
    }
  });
  return (
    <nav className={"navbar__container"}>
      <div className="navbar__wrapper">
        <div className="navbar__left">
          {width <= 768 ? (
            <div
              className="navbar__hamburger_menu"
              onClick={() => setVisible(!visible)}
            >
              <span className="bun"></span>
              <span className="bun"></span>
              <span className="bun"></span>
            </div>
          ) : (
            <span>logo</span>
          )}
        </div>
        <div className="navbar__center">
          {width > 768 ? (
            <Navigation
              className={"navigation__container"}
              setVisible={setVisible}
            />
          ) : (
            <span>logo</span>
          )}
        </div>
        <div className="navbar__right"></div>
      </div>
      <div
        ref={menuRef}
        className="sidebar_container"
        style={{
          left: visible ? "0px" : "-100%",
        }}
      >
        <Sidebar setVisible={setVisible} visible={visible} />
      </div>
    </nav>
  );
};

export default Navbar;
