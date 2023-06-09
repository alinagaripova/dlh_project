import React from 'react';
import './Button.scss';


function Button({ text, type, className = "", onClick }) {
  let btnTypeClass;
  switch(type) {
    case 'outline':
      btnTypeClass = "btn-outline-primary"
      break;  
    default:
      btnTypeClass = "btn-primary"
      break;
  }
  return (
      <button type="button" className={`btn ${btnTypeClass} ${className}`} onClick={onClick} >
        {text}
      </button>
  );
}

export default Button;
