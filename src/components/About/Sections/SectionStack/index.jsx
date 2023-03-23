import React from 'react';
import Title from '../../../Title';
import CustomSwiper from '../../../CustomSwiper';
import vault from "../../../../assets/images/stacks/vault.png";
import spark from "../../../../assets/images/stacks/spark.png";
import react from "../../../../assets/images/stacks/react.png";
import postgre from "../../../../assets/images/stacks/postgre.png";
import kubernetes from "../../../../assets/images/stacks/kubernetes.png";
import hadoop from "../../../../assets/images/stacks/hadoop.png";
import debezium from "../../../../assets/images/stacks/debezium.png";
import './SectionStack.scss';

const iconsList = [
  { img: postgre },
  { img: spark }, 
  { img: hadoop },
  { img: react },
  { img: kubernetes },  
  { img: vault },
  { img: debezium } 
];

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
