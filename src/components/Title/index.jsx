import React from 'react';
import './Title.scss';


function Title({ children, className = "" }) {
  return (
    <div className={`title ${className}`}>
      {children}
    </div>
  );
}

export default Title;
