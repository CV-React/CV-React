import { mockData } from "utils/constants/mockData";
import { book } from "assets/images";
import "./Education.scss";

import { SectionTitle } from "components";
import TimeLineCard from "../TimeLineCard/TimeLineCard";

const Education = () => {
  const { educationData } = mockData;
  return (
    <div id="education" className="education section">
      <div className="container">
        <SectionTitle title="Education" icon={book} />
        <div className="timeline__education">
          {educationData &&
            !!educationData.length &&
            educationData.map((edu, index) => (
              <TimeLineCard key={index} data={edu} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
