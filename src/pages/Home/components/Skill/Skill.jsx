import React from "react";

const Skill = ({ skillData }) => {
  return (
    <div className="skill__wrap">
      {skillData.map((skill, index) => (
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
  );
};

export default Skill;
