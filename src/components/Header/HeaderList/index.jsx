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
    title: "teams",
    url: "/teams",
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
    <div className="header__items nav col-5 d-flex justify-content-between align-items-center">
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
