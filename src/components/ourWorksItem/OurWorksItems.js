import React from "react";
import { Link } from "react-router-dom";
import Hr from "../hr/hr";
import Title from "../title/Title";
import OnWorkElement from "./ourWorkElement/OnWorkElement";
import "./ourWorksItems.scss";

const OurWorksItems = () => {
  return (
    <div className="our__work_itemsContainer">
      <Title title={"Our Works"} />
      <div className="our__work_itemsWrapper">
        <div className="our__work_itemsLeft">
          <OnWorkElement />
        </div>
        <div className="our__work_itemsRight">
          <div className="our__work_itemsRightWrapper">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              doloribus!
            </p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              doloribus!
            </span>
            <Link>
              <button className="our__works_moreButton">
                Daha Fazlası İçin
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* <Hr /> */}
      <div className="our__work_itemsWrapper reverse">
        <div className="our__work_itemsLeft reverse">
          <OnWorkElement />
        </div>
        <div className="our__work_itemsRight">
          <div className="our__work_itemsRightWrapper">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              doloribus!
            </p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              doloribus!
            </span>
            <Link>
              <button className="our__works_moreButton">
                Daha Fazlası İçin
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorksItems;
