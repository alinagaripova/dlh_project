import React from 'react';
import Layout from '../Layout';
import Title from '../Title';
import PersonCard from './PersonCard';
import './Team.scss';

function Team() {
  return (
    <Layout>
      <div className="team-page container">
        <Title>
          we are united with our passion to create innovative and complicated products
        </Title>
        <PersonCard />
      </div>
    </Layout>
  );
}

export default Team;
