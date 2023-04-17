import React from 'react';
import Marquee from "react-fast-marquee";

import './CustomSwiper.scss';

function CustomSwiper({iconsList}) {
  return (
    <div className="container-custom">
      <div style={{ whiteSpace: 'nowrap' }}>
        <Marquee direction="left" gradient={false} >
          <div className="d-flex">
            {iconsList.map(({ img }) => (
              <div className="swiper-custom-element me-3 me-md-5">
                <img className="swiper-icon" src={img} alt="" />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default CustomSwiper;
