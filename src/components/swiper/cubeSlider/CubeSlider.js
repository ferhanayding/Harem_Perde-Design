import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./cubeSlider.scss";
// import required modules
import { EffectCube, Pagination, Autoplay } from "swiper";

export default function CubeSlider() {
  return (
    <Swiper
      effect={"cube"}
      grabCursor={true}
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[EffectCube, Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="https://m.media-amazon.com/images/I/817SgcFx5GL._SL1500_.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://m.media-amazon.com/images/I/817SgcFx5GL._SL1500_.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://m.media-amazon.com/images/I/817SgcFx5GL._SL1500_.jpg" />
      </SwiperSlide>
    </Swiper>
  );
}
