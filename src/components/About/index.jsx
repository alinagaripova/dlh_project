import React from 'react';
import Layout from '../Layout';
import SectionOne from './Sections/SectionOne';
import SectionStack from './Sections/SectionStack';
import './About.scss';


function About() {
  return (
    <Layout>
      <div className="about-page">
        <SectionOne />
        <SectionStack />
      </div>
    </Layout>
  );
}

export default About;
