import { createContext } from 'react';

const ModalContext = createContext({
  modal: {},
  displayModal: () => Function,
});

ModalContext.displayName = "ModalContext";

export const ModalContextProvider = ModalContext.Provider;
export default ModalContext;
