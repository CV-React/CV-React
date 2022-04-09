import { heart } from "assets/images";
import "./Interest.scss";
import { mockData } from "constants/mockData";
import Enjoy from "./Enjoy/Enjoy";

const Interest = () => {
  const { interest } = mockData;
  return (
    <section id="interest" className="section">
      <div className="container">
        <div className="section__title">
          <h4 className="text__uppercase text__center">
            <img src={heart} alt="demo" />
            Interest
          </h4>
        </div>
        <div className="interest__wrap">
          <div className="wrap__content">
            <p>
              First of all I love music, country music is my favorite. Love
              watching football, movies and playing games with my buddies. I
              spend quite a lot of time in traveling and photography, these
              keeps me fresh for working environment. I also spend time
              volunteering at the Red Cross in London, UK each month.
            </p>
          </div>
          <div className="wrap__enjoy">
            <div className="enjoy__list">
              {interest.map((data, index) => (
                <Enjoy
                  bgColor={index % 2 === 0 ? "#06a763" : "#fff"}
                  color={index % 2 === 0 ? "#fff" : "#06a763"}
                  key={index}
                  icon={data.icon}
                  name={data.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interest;
