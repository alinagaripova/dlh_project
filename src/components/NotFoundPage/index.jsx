import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import "./NotFoundPage.scss";

function NotFoundPage() {
  return (
    <div className="container-fluid not-found-page flex-column">
      <div className="not-found-page__central d-flex flex-column justify-content-around align-items-center">
        <div className="big-title error">404</div>
        <div className="d-flex flex-column align-items-center ">
           <div className="big-title error-text">page not found</div>
           <div className="d-none d-md-block">it was removed or you mistyped the url</div>
        </div>
        <div className="d-md-none">it was removed or you mistyped the url</div>
        <Link to="/" className="inside-link d-none d-md-block">
          <Button text="return to homepage" />
        </Link>
      </div>
      <Link to="/" className="outside-link d-md-none w-100">
        <Button text="return to homepage" />
      </Link>
    </div>
  );
}

export default NotFoundPage;
