import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ModalContext from '../../context/Modal/Context';
import Logo from '../Logo';
import Button from '../Button';
import './Footer.scss';


function Footer() {
  const { displayModal } = useContext(ModalContext);

  return (
    <div className="container">
      <div className="footer d-flex flex-column justify-content-between align-items-start">
       <div className="d-flex flex-column flex-md-row justify-content-between w-100">
          <div className="d-flex flex-column justify-content-between align-items-md-start">
            <Link to="/" className="footer__logo mb-3">
              <Logo/>
            </Link>
            <div className="footer__logo mb-2 d-none d-md-block">
              228 Park Ave S, Pmb 85451,<br/> New York, NY 10003,<br/> United States
            </div>
          </div>
          <div className="d-flex flex-column justify-content-between align-items-md-end">
            <Button text="request a demo" className="mb-3"  onClick={() => displayModal("request")}/>
            <div className="footer__logo mb-2 d-md-none">
              228 Park Ave S, Pmb 85451,<br/> New York, NY 10003, United States
            </div>
            <a href="mailto:someone@yoursite.com" target="_blank" rel="noopener noreferrer" className="email mb-2">
              info@dlhlab.com
            </a>
            <a href="https://www.linkedin.com/company/dlhglobal/" className="social"> </a>
          </div>
       </div>
        <hr/>
        <div className="rights d-flex flex-column flex-md-row justify-content-between w-100">
          <div onClick={() => window.open(`${window.location.origin}/privacy`, '_blank', 'noopener,noreferrer')} className="mb-2">Privacy policy</div>
          <div className="mb-2">Developed with assistance of IAF</div>
          <div>© 2023. All rights reserved</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
