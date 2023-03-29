import React, { useContext } from 'react';
import ModalContext from '../../context/Modal/Context';
import burger from '../../assets/images/burger.png'
import demo from '../../assets/images/demo.png'
import './BurgerMenu.scss';

function BurgerMenu() {
  const { displayModal } = useContext(ModalContext);

  return (
    <div className="burger-menu d-flex d-md-none justify-content-between">
      <div className="burger-menu__modal" onClick={() => displayModal("request")}>
        <img src={demo} alt="modal" />
      </div>
      <div className="burger-menu__menu">
        <img src={burger} alt="menu" />
      </div>
    </div>
  );
}

export default BurgerMenu;
