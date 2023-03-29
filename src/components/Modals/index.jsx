import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalContext from '../../context/Modal/Context';
import ModalRequest from './ModalRequest';

function Modals() {
  const { modal } = useContext(ModalContext);
  const { isOpened, type } = modal;

  let renderModal;
  switch(type){
    case('request'):
      renderModal = <ModalRequest/>
      break;
    default:
      renderModal = <></>
  }

  return (
    <Modal show={isOpened} fullscreen={true} >
      {renderModal}
    </Modal>
  );
}

export default Modals;
