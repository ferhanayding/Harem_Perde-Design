import React from "react";
import Featured from "../../components/featured/Featured";
import WorkSteps from "../../components/workSteps/WorkSteps";
import { motion, useScroll, useSpring } from "framer-motion";
import Hr from "../../components/hr/hr";
import CategoryItems from "../../components/categoryItems/CategoryItems";
import InfoSlider from "../../components/InfoSlider/InfoSlider";
import OurWorksItems from "../../components/ourWorksItem/OurWorksItems";

const Home = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Featured />
      {/* <Hr color="rgb(110, 120, 124)" />
      <WorkSteps />
      <Hr color="rgb(110, 120, 124,0.6)" />
      <CategoryItems />
      <InfoSlider />
      <Hr color="rgb(110, 120, 124,0.6)" />
      <OurWorksItems /> */}
    </>
  );
};

export default Home;
