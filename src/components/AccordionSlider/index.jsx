import React, { useRef, useContext } from 'react';
import ModalContext from '../../context/Modal/Context';
import Button from '../Button';
import accordionData from '../../data/accordion';
import './AccordionSlider.scss';


function AccordionSlider() {
  const { displayModal } = useContext(ModalContext);
  const sliderEl = useRef(null);

  function expand({ currentTarget }) {
    for (let slide of sliderEl.current.children) {
        slide.classList.remove("slide--expanded");
    }
    currentTarget.classList.add("slide--expanded");
  }

  return (
    <div className="container">
      <div className="slider" ref={sliderEl} >
        {accordionData.map(({ title, tabName, icon, description }, index) => {
          return (
            <div className={`slide ${index === 0 ? 'slide--expanded' : ''}`} onClick={(event) => expand(event)}>
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
                <div>
                  {tabName}
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