import React from 'react';
import Layout from '../Layout';
import Title from '../Title';
import CaseCard from "./CaseCard";
import cases from '../../data/cases';
import './Cases.scss';


function Cases() {
  return (
    <Layout>
      <div className="cases-page container">
        <Title>
          cases
        </Title>
        {cases.map((item) => (
          <CaseCard key={item.id} {...item} />
        ))}
      </div>
    </Layout>
  );
}

export default Cases;
