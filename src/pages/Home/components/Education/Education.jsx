import { mockData } from "constants/mockData";
import { book } from "assets/images";
import "./Education.scss";
import Card from "../Card/Card";
import { SectionTitle } from "components";

const Education = () => {
  const { educationData } = mockData;
  return (
    <div id="education" className="education section">
      <div className="container">
        <SectionTitle title="Education" icon={book} />
        <div className="timeline__education">
          {educationData?.map((edu, index) => (
            <Card key={index} data={edu} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
