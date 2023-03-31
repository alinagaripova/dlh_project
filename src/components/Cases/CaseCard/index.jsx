import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './CaseCard.scss';

function CaseCard( props ) {
  const { image, title, task, id} = props;
  const { pathname } = useLocation();

  return (
    <Link to={`/cases/${id}`} className="case-card d-flex justify-content-between align-items-center mb-4">
      <div className="case-card__image  me-4">
        <img src={image} alt={title} />
      </div>
      <div className="case-card__content">
        <div className="case-card__content_title small-title">
          {title}
        </div>
        <div className="case-card__content_desc">
          {task.substr(1, 56)}...
        </div>
      </div>
    </Link>
  );
}

export default CaseCard;
