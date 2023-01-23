import React from "react";
import "./featured.scss";

const Featured = () => {
  return (
    <>
      <div className="featured__container">
        <div className="featured__wrapper">
          {/* title */}
          <div className="featured__titles">
            <span>HAREM PERDE</span>

            <span>& DESIGN</span>
          </div>
          {/* img container */}
          <div className="img__container">
            <div className="first__img">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus, dicta!
              </p>
              <img
                src="https://fabric.axiomthemes.com/wp-content/uploads/2022/08/70_1-3-min.jpg"
                alt=""
              />
            </div>
            <div className="second__img">
              <img
                src="https://fabric.axiomthemes.com/wp-content/uploads/2022/08/70_1-3-min.jpg"
                alt=""
              />
            </div>
            <div className="third__img">
              <img
                src="https://fabric.axiomthemes.com/wp-content/uploads/2022/08/70_1-3-min.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
