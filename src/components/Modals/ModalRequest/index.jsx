import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalContext from '../../../context/Modal/Context';
import Logo from '../../Logo';
import FormRequest from './FormRequest';
import Info from './Info';
import './ModalRequest.scss';

function ModalRequest() {
  const [step, setStep] = useState(1);
  const { modal, displayModal } = useContext(ModalContext);

  const nextStep = (count) => {
    setStep(count);
  };

  const renderBody = () => {
    switch(step){
      case(1):
        return <FormRequest nextStep={nextStep} />
      case(2):
        return <Info/>
      default:
        return <FormRequest />
    }
  }

  return (
    <Modal show={modal?.isOpened} fullscreen={'sm-down'} onHide={() => displayModal("request")} >
      <div className="modal-request">
        <div class="modal-request__header d-flex justify-content-between align-items-center mb-5">
          <Logo />
          <div className="modal-request__close" onClick={() => displayModal("request")}/>
        </div>
        <div class="modal-request__body">
          {renderBody()}
        </div>
      </div>
    </Modal>
  );
}

export default ModalRequest;
