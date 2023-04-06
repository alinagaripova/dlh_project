import React from 'react';
import Title from '../../../Title';
import './SectionVideo.scss';


function SectionVideo() {
  return (
    <div className="video-block container">
      <Title>solution for companies <span className="text_blue">handling huge amount of data</span></Title>
      <div className="w-100 video px-4  mb-3">
        <iframe width="100%" src="https://www.youtube.com/embed/rkjvxgk6gms?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className="video-text px-4 text-align-center">
          DLH is built with open-source solutions so you can easily align its functionality with your business demands
      </div>
    </div>
  );
}

export default SectionVideo;
