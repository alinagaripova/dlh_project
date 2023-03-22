import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import './Header.scss';

const headerItems = [
  {
    title: "about DLH",
    url: "/",
  },
  {
    title: "platform",
    url: "/platform",
  },
  {
    title: "teams",
    url: "/teams",
  },
  {
    title: "cases",
    url: "/cases",
  },
  {
    title: "contact us",
    url: "/#contacts",
  },
]

function Header() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-between align-items-center py-4">
        <Link to="/" className="header__logo col-3">
          <Logo/>
        </Link>
        <div className="header__items nav col-5 d-flex justify-content-between align-items-center">
          {headerItems.map(({ title, url }) => (
            <Link to={url} className="nav-link" key={title}>
              {title}
            </Link> 
          ))}
        </div>
        <div className="col-2 ms-auto">
          info@dlhlab.com
        </div>
      </div>
    </div>
  );
}

export default Header;
