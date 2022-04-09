import "./Experience.scss";
import { mockData } from "constants/mockData";
import { layer } from "assets/images";
import Card from "../Card/Card";
import { SectionTitle } from "components";

const Experience = () => {
  const { experienceData } = mockData;

  return (
    <div id="experience" className="experience section">
      <div className="container">
        <SectionTitle title="Experience" icon={layer} />
        <div className="timeline__experience">
          {experienceData?.map((exp, index) => (
            <Card key={index} data={exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
