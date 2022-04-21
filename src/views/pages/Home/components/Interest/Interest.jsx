import { heart } from "assets/images";
import "./Interest.scss";
import { mockData } from "utils/constants/mockData";
import Enjoy from "./Enjoy/Enjoy";
import { SectionTitle } from "components";

const Interest = () => {
  const { interest } = mockData;

  return (
    <section id="interest" className="section animated">
      <div className="container">
        <SectionTitle title="Interest" icon={heart} />
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
            <div className="enjoy__list animated animate_delay">
              {interest &&
                !!interest.length &&
                interest.map((data, index) => (
                  <Enjoy key={index} data={data} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interest;
