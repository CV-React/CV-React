import React from "react";
import { Card } from "../Card";
import "./Experience.scss";

const Experience = ({ experienceData }) => {
  return (
    <div className="experience">
      <div className="experience__container">
        {experienceData?.map((exp, index) => (
          <Card index={index} key={index} data={exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
