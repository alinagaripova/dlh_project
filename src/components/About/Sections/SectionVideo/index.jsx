import React from 'react';
import Title from '../../../Title';
import CaseCard from "../../../Cases/CaseCard";
import cases from '../../../../data/cases';
import './SectionVideo.scss';


function SectionVideo() {
  return (
    <div className="cases-page container">
      <Title>
        solution for companies handling huge amount of data
      </Title>
      <div className="w-100 video px-4  mb-3">
        <iframe width="100%" src="https://www.youtube.com/embed/rkjvxgk6gms?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className="d-flex justify-content-between aligh-items-center text-start px-4">
        <div className="flex-grow-1">
          DLH is built with open-source solutions so you can easily align its functionality with your business demands
        </div>
        <div className="flex-grow-1">
          DLH is based in Russia so you are not risking to operate with no support
        </div>
      </div>
    </div>
  );
}

export default SectionVideo;
