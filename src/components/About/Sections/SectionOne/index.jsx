import React, { useContext }  from 'react';
import ModalContext from '../../../../context/Modal/Context';
import Title from '../../../Title';
import Button from '../../../Button';
import time from "../../../../assets/images/time.png";
import dollar from "../../../../assets/images/dollar.png";
import diagramm from "../../../../assets/images/diagramm.png";
import './SectionOne.scss';

const actions = ['collecting', 'processing', 'storing', 'usage'];
const advantages = [
  {
    text: "take verified and accurate data at any time",
    icon_url: time
  },
  {
    text: "save on technical support and data scientists",
    icon_url: dollar
  },
  {
    text: "grow your revenue while using your data in the right way",
    icon_url: diagramm
  },
];

function SectionOne() {
  const { displayModal } = useContext(ModalContext);

  return (
    <div className="container">
      <div className="section-one d-flex justify-content-between align-items-center flex-column flex-md-row">
        <div className="section-one__text-part d-flex flex-column justify-content-between align-items-start order-2 order-md-1">
          <Title>
            simplify your data management with DLH
          </Title>
          <div className="small-title">
            DLH lets you automate the whole data management lifecycle.
          </div>
          <Button text="request a demo" onClick={() => displayModal("request")} />
          <div className="actions d-flex flex-nowrap">
            {actions.map((item)=> (
              <div key={item} className="action me-2 mb-2"> 
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="section-one__image order-1 order-md-2"/>
      </div>
      <div className="advantages d-flex justify-content-between align-items-center flex-wrap flex-md-nowrap">
        {advantages.map(({ text, icon_url }) => (
          <div key={text} className="advantage d-flex justify-content-between align-items-center">
            <div 
              className="advantage__icon"
              style={{ 
                backgroundImage: `url(${icon_url})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="advantage__text">{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionOne;
