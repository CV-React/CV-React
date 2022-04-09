import React from "react";
import { mockData } from "constants/mockData";
import { mixer } from "assets/images";
import "./Skill.scss";

const Skill = () => {
  const { skillsData } = mockData;
  return (
    <div id="skill" className="skill section">
      <div className="container">
        <div className="section__title">
          <h4 className="text__uppercase text__center">
            <img src={mixer} alt="demo" />
            skills
          </h4>
        </div>
        <div className="skill__content">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill__item">
              <h3 className="item__title text--shadow">{skill.title}</h3>
              {skill.skillBar.map((skillBar, index1) => (
                <div key={index1} className="skillBar">
                  <div className="skillBar__title">{skillBar.title}</div>
                  <div className="skillBar_process">
                    <div style={{ width: `${skillBar.percent}%` }}></div>
                  </div>
                  <div className="skillBar_percent">{skillBar.percent}%</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
