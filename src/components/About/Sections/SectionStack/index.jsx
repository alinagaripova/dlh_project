import React from 'react';
import Title from '../../../Title';
import CustomSwiper from '../../../CustomSwiper';
import iconsList from '../../../../data/stackList';
import './SectionStack.scss';

function SectionStack() {
  return (
    <div className="section-stack">
      <Title className="container">
        building DLH based on convenient services and software
      </Title>
      <CustomSwiper iconsList={iconsList} />
    </div>
  );
}

export default SectionStack;
