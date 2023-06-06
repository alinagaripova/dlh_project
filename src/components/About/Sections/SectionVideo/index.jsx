import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Title from '../../../Title';
import videoPreview from '../../../../assets/images/video-preview.png';
import './SectionVideo.scss';


function SectionVideo() {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <div className="video-block container">
      <Title>solution for companies <span className="text_blue">handling huge amount of data</span></Title>
      <div className="video-picture mb-5" onClick={() => setIsShowModal(!isShowModal)}>
        <img src={videoPreview} alt="videoPreview" className="w-100"/>
      </div>
      <div className="video-text px-4 text-align-center">
          DLH is built with open-source solutions so you can easily align its functionality with your business demands
      </div>

      <Modal
        show={isShowModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => setIsShowModal(false)}
      >
        <div className="w-100 video">
          <iframe width="100%" src="https://www.youtube.com/embed/rkjvxgk6gms?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </Modal>
    </div>
  );
}

export default SectionVideo;
