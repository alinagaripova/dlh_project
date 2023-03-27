import React from 'react';
import Title from '../../../Title';
import CaseCard from "../../../Cases/CaseCard";
import cases from '../../../../data/cases';


function SectionVideo() {
  return (
    <div className="cases-page container">
      <Title>
        cases
      </Title>
      <div className="d-flex justify-content-between align-items-center flex-wrap flex-md-nowrap">
        {cases.map((item) => (
          <CaseCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default SectionVideo;
