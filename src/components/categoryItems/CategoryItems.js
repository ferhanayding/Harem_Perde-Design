import React from "react";
import "./categoryItems.scss";
const CategoryItems = () => {
  return (
    <div className="category__container">
      <div className="category__wrapper">
        <div className="category__item">
          <img
            src="https://www.perdeoutlet.com/image/cache/catalog/products/zebra-perde/siyah-duz-zebra-perde-oregon-0126/siyah-zebra-perde-5-1200x1800.jpg"
            alt=""
          />
          <div className="category__item_info">
            <span className="category__num">1.</span>
            <div className="category__item_bottom">
              <span className="category_name">Jalüzler</span>
            </div>
          </div>
        </div>
        <div className="category__item">
          <img
            src="https://ayb.akinoncdn.com/products/2022/11/30/2180396/9d9d45bf-6ddf-4ee9-be55-5bd69608a5c6_size780x780_quality60_cropCenter.jpg"
            alt=""
          />
          <div className="category__item_info">
            <span className="category__num">2.</span>
            <div className="category__item_bottom">
              <span className="category_name">Perdeler</span>
            </div>
          </div>
        </div>
        <div className="category__item">
          <img
            src="https://www.bebekcaddesi.com/images/urunler/Ucan-Kalp-Desenli-Orme-Kaliteli-Cocuk-Odasi-Tul-Perde-resim-410.jpg"
            alt=""
          />
          <div className="category__item_info">
            <span className="category__num">3.</span>
            <div className="category__item_bottom">
              <span className="category_name">Tüller</span>
            </div>
          </div>
        </div>
        <div className="category__item">
          <img
            src="https://st1.myideasoft.com/idea/cp/40/myassets/products/037/img-1109-son.JPG?revision=1573887714"
            alt=""
          />
          <div className="category__item_info">
            <span className="category__num">4.</span>
            <div className="category__item_bottom">
              <span className="category_name">Aksesuar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItems;
