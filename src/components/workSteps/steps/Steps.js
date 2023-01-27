import React from "react";
import "../workSteps.scss";
import { Icon } from "../../../svg/Icon";

const Steps = () => {
  return (
    <>
      <div className="work__steps_item">
        <span>
          <Icon name="check" size={100} />
        </span>
        <span>Lorem ipsum</span>
        <span>1</span>
      </div>
      <div className="work__steps_item">
        <span>
          <Icon size={100} name={"metre"} />
        </span>
        <span>Lorem ipsum</span>
        <span>2</span>
      </div>
      <div className="work__steps_item">
        <span>
          <Icon size={100} name={"tailor"} />
        </span>
        <span>Lorem ipsum</span>
        <span>3</span>
      </div>
      <div className="work__steps_item">
        <span>
          <Icon name="drill" size={100} />
        </span>
        <span>Lorem ipsum</span>
        <span>4</span>
      </div>
    </>
  );
};

export default Steps;
