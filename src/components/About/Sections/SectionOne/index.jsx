import React from 'react';
import Title from '../../../Title';
import Button from '../../../Button';
import './SectionOne.scss';

const actions = ['collecting', 'processing', 'storing', 'usage'];

function SectionOne({ children }) {
  return (
    <div className="section-one d-flex justify-content-around align-items-center flex-column flex-md-row">
      <div className="section-one__text-part d-flex flex-column justify-content-between align-items-start order-2 order-md-1">
        <Title>
          simplify your data management with DLH
        </Title>
        <div>
          DLH lets you automate the whole data management lifecycle.
        </div>
        <Button text="request a demo" />
        <div className="actions d-flex">
          {actions.map((item)=> (
            <div key={item} className="action">
              {item}
            </div>
          ))}
        </div>

      </div>
      <div className="section-one__image order-1 order-md-2"/>
    </div>
  );
}

export default SectionOne;
