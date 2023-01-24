import React from "react";
import "./featured.scss";
import { motion } from "framer-motion";
const Featured = () => {
  return (
    <>
      <div className="featured__container">
        <div className="featured__wrapper">
          {/* title */}
          <div className="featured__titles">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              // exit={{ scale: 1 }}
            >
              HAREM PERDE
            </motion.span>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              & DESIGN
            </motion.span>
          </div>
          {/* img container */}
          <div className="img__container">
            <motion.div
              className="first__img"
              initial={{ x: 750, scale: 1 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus, dicta!
              </p>
              <img
                src="https://fabric.axiomthemes.com/wp-content/uploads/2022/08/70_1-3-min.jpg"
                alt=""
              />
            </motion.div>
            <motion.div
              className="second__img"
              initial={{ y: 750, scale: 1 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://fabric.axiomthemes.com/wp-content/uploads/2022/08/70_1-3-min.jpg"
                alt=""
              />
            </motion.div>
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
