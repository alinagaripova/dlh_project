import React from 'react';
import Layout from '../Layout';
import SectionOne from './Sections/SectionOne';
import SectionStack from './Sections/SectionStack';
import SectionCases from './Sections/SectionCases';
import SectionVideo from './Sections/SectionVideo';
import AccordionSlider from '../AccordionSlider';
import './About.scss';


function About() {
  return (
    <Layout title={"about"} >
      <div className="about-page">
        <SectionOne />
        <SectionVideo />
        <AccordionSlider />
        <SectionCases />
        <SectionStack />
      </div>
    </Layout>
  );
}

export default About;
