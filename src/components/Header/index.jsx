import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import HeaderList from './HeaderList';
import './Header.scss';


function Header() {
  return (
    <div className="container">
      <div className="header__logo d-md-none pt-2">
        <Link to="/" className="header__logo d-md-none">
          <Logo/>
        </Link>
      </div>
      <div className="row d-none d-md-flex justify-content-between align-items-center py-4">
        <Link to="/" className="header__logo col-3">
          <Logo/>
        </Link>
        <HeaderList />
        <div className="col-2 ms-auto">
          info@dlhlab.com
        </div>
      </div>
    </div>
  );
}

export default Header;
