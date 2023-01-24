import React from "react";
import Slider from "react-slick";
import "./infoSlider.scss";
const InfoSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    dragged: false,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1,
    cssEase: "linear",
  };
  return (
    <div className="info__slider_container">
      <Slider {...settings}>
        <div>
          <span>İndirimli Ürünler</span>
        </div>
        <div>||</div>
        <div>
          <span>Motorlu Ürünlerde 2 Yıl Garanti</span>
        </div>
        <div>||</div>
        <div>
          <span>Yatak Örtüleri</span>
        </div>
        <div>||</div>
        <div>
          <span>Ücretsiz Montaj</span>
        </div>
        <div>||</div>
        <div>
          <span>En Yeni Kolleksiyon</span>
        </div>
        <div>||</div>
      </Slider>
    </div>
  );
};

export default InfoSlider;
