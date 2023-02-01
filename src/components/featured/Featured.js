import React, { useState } from "react";
import "./featured.scss";

import ReactPlayer from "react-player";
const Featured = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  console.log(isVideoLoaded);

  return (
    <>
      <div className="featured__container">
        <div style={{ opacity: isVideoLoaded ? 1 : 0 }}>
          <ReactPlayer
            url={"animasyon/asd.mp4"}
            playing={true}
            controls={false}
            loop={false}
            muted={true}
            height="100%"
            width="100vw"
            playsinline={true}
            onReady={onLoadedData}
          />
        </div>
      </div>
    </>
  );
};

export default Featured;
