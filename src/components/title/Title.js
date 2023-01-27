import React from "react";
import "./title.scss";
const Title = ({ title, className }) => {
  return (
    <div className="title__container">
      <span className={className}>{title}</span>
    </div>
  );
};

export default Title;
