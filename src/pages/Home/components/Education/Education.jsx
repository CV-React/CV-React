import React from "react";
import { Card } from "../Card";
import "./Education.scss";

const Education = ({ educationData }) => {
  return (
    <div className="education">
      <div className="education__container">
        {educationData?.map((edu, index) => (
          <Card index={index} key={index} data={edu} />
        ))}
      </div>
    </div>
  );
};

export default Education;
