import React, { useRef, useContext, useState } from 'react';
import ModalContext from '../../context/Modal/Context';
import Button from '../Button';
import Title from '../Title';
import arrow from '../../assets/images/arrow.png';
import accordionData from '../../data/accordion';
import './AccordionSlider.scss';


function AccordionSlider() {
  const [chosenSlideIdx, setChosenSlideIdx] = useState(0);
  const { displayModal } = useContext(ModalContext);
  const sliderEl = useRef(null);

  function expand({ currentTarget }, index) {
    for (let slide of sliderEl.current.children) {
        slide.classList.remove("slide--expanded");
    }
    currentTarget.classList.add("slide--expanded");
    setChosenSlideIdx(index);
  }

  return (
    <div className="container">
      <Title>we deploy DLH in whole or by specific modules based on business demands</Title>
      <div className="slider" ref={sliderEl} >
        {accordionData.map(({ title, tabName, icon, description }, index) => {
          return (
            <div className={`slide ${index === 0 ? 'slide--expanded' : ''}`} onClick={(event) => expand(event, index)}>
              <div className="content">
                <div className="image mb-4">
                  <img src={icon} alt={title} />
                </div>
                <div className="small-title mb-2">
                  {title}
                </div>
                <div className="description mb-3">
                  {description}
                </div>
                <Button text={'request a demo'} onClick={() => displayModal("request")} />
              </div>
              <div className="header">
                <div className="header__text">
                  {tabName}
                </div>
                <div 
                  className={`${index === chosenSlideIdx ? 'd-none' : 'header__arrow'} ${index < chosenSlideIdx ? 'header__arrow_rotate' : ''}`}
                >
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default AccordionSlider;