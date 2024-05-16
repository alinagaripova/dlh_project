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
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start w-100 row-md">
          <div className="d-flex flex-column justify-content-between align-items-md-start col-md-4 ">
            <Link to="/" className="footer__logo mb-3">
              <Logo />
            </Link>
          </div>
          <Button text="request a demo" className="request mb-3 col-md-4" onClick={() => displayModal("request")} />
          <div className="d-flex flex-column justify-content-between align-items-md-end col-md-4">
            <div className="contact d-none d-md-block small-title mb-3">contact us</div>
            <a href="mailto:someone@yoursite.com" target="_blank" rel="noopener noreferrer" className="email">
              info@dlhlab.com
            </a>
            {/* <a href="https://www.linkedin.com/company/dlhglobal/" className="social"> </a>
            <div className="address mb-2">
              1201 N.Orange Street, Wilmington, <br/> New Castle, United States <br/> 19801-1186, DLH Global INC
            </div> */}
          </div>
        </div>
        <hr />
        <div className="rights d-flex flex-column flex-md-row justify-content-between w-100">
          <a href={`${window.location.origin}/privacy`} className="mb-2" to="privacy" target="_blank" rel="noopener noreferrer" >Privacy policy</a>
          <div className="mb-2">Developed with assistance of IAF</div>
          <div>© 2023. DLH Global INC. All rights reserved</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
