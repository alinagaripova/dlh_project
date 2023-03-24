import React from 'react';
import team from '../../../data/team';
import './PersonCard.scss';

const PersonSign = ({ className, name, jobTitle}) => (
  <div className={`${className}`}>
    <div className="person-card__description_name small-title">
      {name}
    </div>
    <div className="person-card__description_job-title">
      {jobTitle}
    </div>
  </div>
)

function PersonCard() {
  return (
    <div className="person-cards">
      {team.map(({ image, name, job_title, text}) => (
        <div className="person-card d-flex flex-column flex-md-row justify-content-between align-items-center mb-5" key={name}>
          <div className="person-card__image d-flex justify-content-start align-items-center w-100 mb-3">
            <img src={image} alt={name} className="me-3" />
            <PersonSign name={name} jobTitle={job_title} className="d-md-none" />
          </div>
          <div className="person-card__description">
            <div className="person-card__description_text mb-2">
              {text}
            </div>
            <PersonSign name={name} jobTitle={job_title} className="d-none d-md-block text-end" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PersonCard;
