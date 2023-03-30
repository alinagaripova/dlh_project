import React, { useContext } from 'react';
import ModalContext from '../../context/Modal/Context';
import ModalRequest from './ModalRequest';

function Modals() {
  const { modal } = useContext(ModalContext);
  const { type } = modal;

  let renderModal;
  switch(type){
    case('request'):
      renderModal = <ModalRequest/>
      break;
    default:
      renderModal = <></>
  }

  return (
    <>
      {renderModal}
    </>
  );
}

export default Modals;
