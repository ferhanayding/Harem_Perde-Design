import React from "react";
import "./hr.scss";
const Hr = ({ color }) => {
  color = "rgb(193, 154, 91)";
  return (
    <div className="container">
      <div className="line" style={{ background: color }}></div>
    </div>
  );
};

export default Hr;
