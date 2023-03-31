import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../Layout';
import Title from '../../Title';
import Button from '../../Button';
import cases from '../../../data/cases';
import './Case.scss';

const Count = ({count, className =""}) => {
  return (
    <div className={`${className} number d-flex justify-content-center`}>
      <div className="text-center">
        {count}
      </div>
    </div>
  )
}

function Case() {
  let { caseId } = useParams();

  const currentCase = cases.find(item => item.id === Number(caseId));
  const { title, image, description, task, solutions, effects, company_site } = currentCase;

  console.log(currentCase)

  return (
    <Layout>
      <div className="case-page container">
        <Title>
          {title}
        </Title>
        <div className="case-page__first-part row">
          <div className="image mb-4 col">
            <img src={image} alt={title} />
          </div>
          <a href={company_site} target="_blank" rel="noreferrer" className={"d-md-none mb-4"}>
            <Button text="web site" /> 
          </a>
          <div className="desc col">
            <div className="description mb-4">
              <div className="small-title">company description</div>
              <div>{description}</div>
            </div>
            <div className="tasks mb-4">
              <div className="small-title">tasks</div>
              <div className="tasks__text">{task}</div>
            </div>
          </div>
        </div>
        <div className="case-page__second-part">
          <div className="solutions mb-4 me-4">
            <div className="small-title">solution</div>
            {solutions.map((item, index) => {
              return (
                <div key={item} className="solution row align-items-center mb-3">
                  <div className="col-3">
                    <Count count={++index} />
                  </div>
                  <div className="col-9">{item}</div>
                </div>
              )
            })}
          </div>
          <div className="effects mb-4">
            <div className="small-title">effects</div>
            <div className="mb-2">{effects.desc}</div>
            {effects.list.map((item, index) => {
              return (
                <div key={item} className="effect row align-items-center mb-3">
                  <div className="col-3">
                    <Count count={++index} />
                  </div>
                  <div className="col-9">{item}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Case;
