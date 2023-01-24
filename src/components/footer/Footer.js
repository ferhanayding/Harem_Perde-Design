import React from "react";
import { Link } from "react-router-dom";
import Hr from "../hr/hr";
import "./footer.scss";
import { Instagram, Facebook } from "@mui/icons-material";
const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__wrapper">
        <div className="footer__left">
          <p>Lorem ipsum, dolor sit e, placeat!</p>
        </div>
        <div className="footer__center">
          <ul className="list__items">
            <span>Adres</span>
            <li>Baku huseyin cavid pr. 528. mehle</li>
          </ul>
          <div className="social__media_container">
            <a
              target={"_blank"}
              href={"https://www.instagram.com/haremperdebaku/"}
            >
              <Instagram className="sc" />
            </a>
            <a
              target={"_blank"}
              href={
                "https://www.facebook.com/Harem-PerdeBrillanthome-474050882720532/"
              }
            >
              <Facebook className="sc f" />
            </a>
          </div>
        </div>
        <div className="footer__right">
          <ul className="list__items">
            <span>Bilgi al</span>
            <li>bilgi@gmail.com</li>
            <li>05555555</li>
            <li>01255555</li>
          </ul>
        </div>
      </div>
      <Hr />
      <div className="footer__bottom">
        <div className="footer__bottom_left">
          <ul>
            <li>
              <Link to={"/about"} className="hover__underline_link">
                About
              </Link>
            </li>
            <li>
              <Link to={"/ourworks"} className="hover__underline_link">
                Our Works
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="hover__underline_link">
                Contact
              </Link>
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
