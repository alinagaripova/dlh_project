import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import Button from '../Button';
import './Footer.scss';


function Footer() {
  return (
    <div className="container">
      <div className="footer d-flex flex-column justify-content-between align-items-start">
       <div className="d-flex flex-column flex-md-row justify-content-between w-100">
          <Link to="/" className="footer__logo mb-4">
            <Logo/>
          </Link>
          <div className="d-flex flex-column justify-content-between">
            <Button text="request a demo" className="mb-3"/>
            <div className="email">
              info@dlhlab.com
            </div>
          </div>
       </div>
        <hr/>
        <div className="rights d-flex flex-column flex-md-row justify-content-between w-100">
          <div className="mb-2">Privacy policy</div>
          <div className="mb-2">Developed with assistance of IAF</div>
          <div>© 2023. All rights reserved</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
