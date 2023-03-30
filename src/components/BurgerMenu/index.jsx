import React, { useContext, useState } from 'react';
import ModalContext from '../../context/Modal/Context';
import burger from '../../assets/images/burger.png'
import demo from '../../assets/images/demo.png'
import BurgerMenuList from './BurgerMenuList';
import './BurgerMenu.scss';

function BurgerMenu() {
  const { displayModal } = useContext(ModalContext);
  const [isOpened, setIsOpened] = useState(false);

  const displayMenu = () => setIsOpened(!isOpened);

  return (
    <>
      <div className="burger-menu d-flex d-md-none justify-content-between">
        <div className="burger-menu__modal" onClick={() => displayModal("request")}>
          <img src={demo} alt="modal" />
        </div>
        <div className="burger-menu__menu" onClick={displayMenu}>
          <img src={burger} alt="menu" />
        </div>
      </div>
      {isOpened && <BurgerMenuList displayMenu={displayMenu} />}
    </>
  );
}

export default BurgerMenu;
