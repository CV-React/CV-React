import React from "react";
import { Card } from "../Card";
import "./Experience.scss";
import { mockData } from "constants/mockData";
import { layer } from "assets/images";

const Experience = () => {
  const { experienceData } = mockData;

  return (
    <div id="experience" className="experience section">
      <div className="container">
        <div className="section__title">
          <h4 className="text__uppercase text__center">
            <img src={layer} alt="demo" />
            Experience
          </h4>
        </div>
        <div className="timeline__experience">
          {experienceData?.map((exp, index) => (
            <Card index={index} key={index} data={exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
