import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
    title: "team",
    url: "/team",
  },
  {
    title: "cases",
    url: "/cases",
  },
  {
    title: "contact us",
    url: "/",
    hash: "#footer"
  },
]

function HeaderList({onHide}) {
  return (
    <div className="header__items nav col-5 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
      {headerItems.map(({ title, url, hash }) => {
        if(hash){
          return (
          <HashLink to={`${url}${hash}`} className="nav-link" key={title} onClick={onHide}>
            {title}
          </HashLink>
          );
        } else {
          return (
            <Link to={url} className="nav-link" key={title} onClick={onHide}>
              {title}
            </Link> 
          )
        } 
      })}
    </div>
  );
}

export default HeaderList;
