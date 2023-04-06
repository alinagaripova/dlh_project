import React from 'react';
import Layout from '../Layout';
import Title from '../Title';
import Options from './Sections/Options';
import SectionStack from '../About/Sections/SectionStack';
import proccess from '../../assets/images/proccess.png';
import proccessBig from '../../assets/images/proccess-des.png';
import goals from '../../assets/images/goals.png';
import goalsBig from '../../assets/images/goalsDes.png';
import './Platform.scss';

function Platform() {
  return (
    <Layout title={"platform"} >
      <div className="platform-page container">
        <Title>
          DLH integrates with any system inside your IT Landscape
        </Title>
        <Options />
        <Title>
          we automate data processing from collection to usage
        </Title>
        <div className="proccess px-md-5">
          <img className="d-md-none" src={proccess} alt="proccess" />
          <img className="d-none d-md-block" src={proccessBig} alt="proccess" />
        </div>
        <Title>
          consider business goals on each stage
        </Title>
        <div className="proccess">
          <img className="d-md-none" src={goals} alt="proccess" />
          <img className="d-none d-md-block" src={goalsBig} alt="proccess" />
        </div>
      </div>
      <SectionStack />
    </Layout>
  );
}

export default Platform;
