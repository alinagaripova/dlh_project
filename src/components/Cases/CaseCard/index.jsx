import React from 'react';
import { Link } from 'react-router-dom';
import './CaseCard.scss';


function CaseCard( props ) {
  const { image, title, task, url} = props;
  return (
    <Link to={url}>
      <div className="case-card">
        <div className="case-card__image">
          <img src={image} alt={title} />
        </div>
        <div className="case-card__content">
          <div className="case-card__content_title">
            {title}
          </div>
          <div className="case-card__content_desc">
            {task.substr(1, 56)}...
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CaseCard;
