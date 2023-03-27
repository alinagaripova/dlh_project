import React from 'react';
import Layout from '../Layout';
import SectionOne from './Sections/SectionOne';
import SectionStack from './Sections/SectionStack';
import SectionCases from './Sections/SectionCases';
import SectionVideo from './Sections/SectionVideo';
import './About.scss';


function About() {
  return (
    <Layout>
      <div className="about-page">
        <SectionOne />
        <SectionVideo />
        <SectionCases />
        <SectionStack />
      </div>
    </Layout>
  );
}

export default About;
