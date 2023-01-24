import React from "react";
import "./title.scss";
const Title = ({ title }) => {
  return (
    <div className="title__container">
      <span>{title}</span>
    </div>
  );
};

export default Title;
