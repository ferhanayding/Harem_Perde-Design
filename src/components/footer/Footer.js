import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__wrapper">
        <div className="footer__left">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
            placeat!
          </p>
        </div>
        <div className="footer__center">
          <span>Adres</span>
          <span>Baku huseyin cavid pr. 528. mehle</span>
          <div className="social__media_container"></div>
        </div>
        <div className="footer__right">
          <span>Bilgi al</span>
          <span>bilgi@gmail.com</span>
          <span>05555555</span>
          <span>01255555</span>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom_left">
          <ul>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Our Works</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer__bottom_right">
          <span> Lorem ipsum dolor sit.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
