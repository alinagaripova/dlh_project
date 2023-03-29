import React, { useState } from 'react';
import { ModalContextProvider } from "../Context";

export default function ModalProvider({ children }){
  const [modal, setModal] = useState({
    isOpened: false,
    type: ""
  });

  function displayModal(type){
    setModal({
      isOpened: !modal.isOpened,
      type
    });
  }

  return (
    <ModalContextProvider 
      value={{
        modal,
        displayModal,
      }}
    >
      {children}
    </ModalContextProvider>
  )
}