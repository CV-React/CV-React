import React from "react";
import { Card } from "../Card";
import { mockData } from "constants/mockData";
import { book } from "assets/images";
import "./Education.scss";
const Education = () => {
  const { educationData } = mockData;
  return (
    <div id="education" className="education section">
      <div className="container">
        <div className="section__title">
          <h4 className="text__uppercase text__center">
            <img src={book} alt="demo" />
            Education
          </h4>
        </div>
        <div className="timeline__education">
          {educationData?.map((edu, index) => (
            <Card index={index} key={index} data={edu} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
