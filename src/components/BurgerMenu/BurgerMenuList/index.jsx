import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import HeaderList from '../../Header/HeaderList';
import Logo from '../../Logo';
import './BurgerMenuList.scss';

function BurgerMenuList({ displayMenu }) {

  return (
    <div className="burger-menu-list">
      <Modal show={true} onHide={displayMenu}>
        <div className="burger-menu-list__header d-flex justify-content-between align-items-center mb-4">
          <Logo />
          <div className="burger-menu-list__close" onClick={displayMenu}/>
        </div> 
        <HeaderList />
        <div className="email">
          info@dlhlab.com
        </div>
        <a href="https://www.linkedin.com/company/dlhglobal/" className="social"> </a>
      </Modal>
    </div>
  );
}

export default BurgerMenuList;
