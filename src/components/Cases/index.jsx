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
        <div className="d-flex justify-content-between align-items-center flex-wrap flex-lg-nowrap">
          {cases.map((item) => (
            <CaseCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Cases;
