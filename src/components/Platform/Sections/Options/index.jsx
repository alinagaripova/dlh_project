import React from 'react';
import platform from '../../../../data/platform';
import './Options.scss';

const Option = ({ title, icon, description }) => {
  return (
    <div className="option">
      <div className="d-flex align-items-center" key={title}>
        <div className="option__image">
          <img src={icon} alt={title} />
        </div>
        <div className="option__info">
          <div className="option__info_title small-title">
            {title}
          </div>
          <div class="line"></div>
        </div>
      </div>
      <div className="option__info_desc">
        {description}
      </div>
    </div>
  )
}
function Options() {
  const { options } = platform;
  const leftCol = options.filter((item) =>  item.place === "left");
  const rightCol = options.filter((item) =>  item.place === "right");
  return (
    <div className="options row">
      <div className="d-md-none">
        {options.map(({ title, icon, description }) =>(
          <div className="option d-flex" key={title}>
            <div className="option__image">
              <img src={icon} alt={title} />
            </div>
            <div className="option__info">
              <div className="option__info_title small-title">
                {title}
              </div>
              <div className="option__info_desc">
                {description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-none d-md-block col left">
        {leftCol.map((item) => <Option {...item} /> )}
      </div>
      <div className="d-none d-md-block col right">
        {rightCol.map((item) => <Option {...item} /> )}
      </div>
    </div>
  );
}

export default Options;
