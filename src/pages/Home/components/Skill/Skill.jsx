import React from "react";

const Skill = ({ data }) => {
  return (
    <div className="skill__wrap">
      {data.map((skill, i) => (
        <div key={i} className="skill__item">
          <h3 className="item__title text--shadow">{skill.title}</h3>
          {skill.skillbar.map((skillbar, j) => (
            <div key={j} className="skillbar">
              <div className="skillbar__title">{skillbar.title}</div>
              <div className="skillbar_process">
                <div style={{ width: `${skillbar.percent}%` }}></div>
              </div>
              <div className="skillbar_percent">{skillbar.percent}%</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skill;
