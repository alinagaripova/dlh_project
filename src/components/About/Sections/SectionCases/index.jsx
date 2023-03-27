import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../../Title';
import Button from '../../../Button';
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
      <div className="d-flex justify-content-end">
        <Link to="/cases">
          <Button type="outline" text="explore more" />
        </Link>
      </div>
    </div>
  );
}

export default SectionVideo;
