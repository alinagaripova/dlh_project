import React from 'react';
import SectionOne from './Sections/SectionOne';
import Button from '../Button';
import './About.scss';


function About({ children }) {
  return (
    <div className="about-page container">
      <SectionOne />
    </div>
  );
}

export default About;
