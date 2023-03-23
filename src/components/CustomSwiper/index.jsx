import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import './CustomSwiper.scss';

function CustomSwiper({iconsList}) {
  return (
    <div className="container-custom">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {iconsList.map(({ img }) => (
          <SwiperSlide>
            <div className="swiper-custom-element">
              <img className="swiper-icon" src={img} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CustomSwiper;
