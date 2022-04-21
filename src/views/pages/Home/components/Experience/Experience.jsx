import "./Experience.scss";
import { mockData } from "utils/constants/mockData";
import { layer } from "assets/images";
import { SectionTitle } from "components";
import TimeLineCard from "../TimeLineCard/TimeLineCard";

const Experience = () => {
  const { experienceData } = mockData;

  return (
    <div id="experience" className="experience section">
      <div className="container">
        <SectionTitle title="Experience" icon={layer} />
        <div className="timeline__experience">
          {experienceData &&
            !!experienceData.length &&
            experienceData.map((exp, index) => (
              <TimeLineCard key={index} data={exp} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
