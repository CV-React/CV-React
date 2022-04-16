import React from "react";
import { mockData } from "utils/constants/mockData";
import { mixer } from "assets/images";
import "./Skill.scss";
import { SectionTitle } from "components";
import SkillBar from "./SkillBar";

const Skill = () => {
  const { skillsData } = mockData;
  return (
    <div id="skill" className="skill section animated">
      <div className="container">
        <SectionTitle title="Skill" icon={mixer} />
        <div className="skill__content">
          {skillsData &&
            !!skillsData.length &&
            skillsData.map((skill, index) => (
              <div key={index} className="skill__item">
                <h3 className="item__title text--shadow">{skill.title}</h3>
                {skill.skillBar &&
                  !!skill.skillBar.length &&
                  skill.skillBar.map((skillBar, index1) => (
                    <SkillBar key={index1} data={skillBar} />
                  ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
