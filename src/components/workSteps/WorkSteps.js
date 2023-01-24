import "./workSteps.scss";

import React from "react";
import Title from "../title/Title";
import Steps from "./steps/Steps";
import LinearDeterminate from "./steps/progress";
const WorkSteps = () => {
  return (
    <div className="work__steps_container">
      <Title title={"Work Steps"} />
      <div className="work__steps_center">
        <div className="steps__left">
          <p>Lorem ipsum dolor sit amet . dolor sit amet consectetur</p>
        </div>
        <div className="steps__right">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos eos,
            vero corrupti fugiat magni quia id a quis nam quod aut quam
            <br />
            similique modi consequuntur rem maiores iure expedita
            exercitationem?
          </p>
        </div>
      </div>
      <div className="work__steps_bottom">
        <Steps />
        <div className="progressbar__container">
          <LinearDeterminate />
        </div>
      </div>
    </div>
  );
};

export default WorkSteps;
