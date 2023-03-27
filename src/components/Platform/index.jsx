import React from 'react';
import Layout from '../Layout';
import Title from '../Title';
import Options from './Sections/Options';
import SectionStack from '../About/Sections/SectionStack';
import './Platform.scss';

function Platform() {
  return (
    <Layout>
      <div className="platform-page container">
        <Title>
          DLH integrates with any system inside your IT Landscape
        </Title>
        <Options />
      </div>
      <SectionStack />
    </Layout>
  );
}

export default Platform;
