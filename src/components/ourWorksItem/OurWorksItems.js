import React from "react";
import { Link } from "react-router-dom";
import EffectSwiper from "../swiper/effectCard/EffectSwiper";
import CubeSlider from "../swiper/cubeSlider/CubeSlider";
import Title from "../title/Title";
import "./ourWorksItems.scss";

const OurWorksItems = () => {
  return (
    <div className="our__work_itemsContainer">
      <Title title={"Our Works"} />
      <div className="our__work_itemsWrapper">
        <div className="our__work_itemsLeft">
          <CubeSlider />
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

      <div className="our__work_itemsWrapper reverse">
        <div className="our__work_itemsLeft reverse">
          <CubeSlider />
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
