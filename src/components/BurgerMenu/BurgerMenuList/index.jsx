import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import HeaderList from '../../Header/HeaderList';
import Logo from '../../Logo';
import './BurgerMenuList.scss';

function BurgerMenuList({ displayMenu }) {

  return (
      <Offcanvas show={true} placement={'end'} name={'end'} onHide={displayMenu}>
        <div className="burger-menu-list">
          <div className="burger-menu-list__header d-flex justify-content-between align-items-center mb-4">
            <Logo />
            <div className="burger-menu-list__close" onClick={displayMenu}/>
          </div>
          <HeaderList onHide={displayMenu} />
          <a href="mailto:someone@yoursite.com" target="_blank" rel="noopener noreferrer" className="email">
            info@dlhlab.com
          </a>
          <a href="https://www.linkedin.com/company/dlhglobal/" className="social"> </a>
        </div>
      </Offcanvas>
  );
}

export default BurgerMenuList;
