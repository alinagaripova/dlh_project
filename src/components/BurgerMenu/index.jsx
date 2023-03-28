import React from 'react';
import burger from '../../assets/images/burger.png'
import demo from '../../assets/images/demo.png'
import './BurgerMenu.scss';

function BurgerMenu() {
  return (
    <div className="burger-menu d-flex d-md-none justify-content-between">
      <div className="burger-menu__modal">
        <img src={demo} alt="modal" />
      </div>
      <div className="burger-menu__menu">
        <img src={burger} alt="menu" />
      </div>
    </div>
  );
}

export default BurgerMenu;
