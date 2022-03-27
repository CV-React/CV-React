import React, { useRef } from "react";
import "./Home.scss";
import {
  educationData,
  experienceData,
  homeLink,
  socialIcon,
  skillsData,
} from "constants/fake-data.js";
import { FaBook } from "react-icons/fa";
import { BsCalendar2Minus, BsFillLightningFill } from "react-icons/bs";
import { About, Banner, Setting, Skill, TimeLine, Title } from "./components";
import { IsFadeUp } from "hooks/useIntersection";

const Home = () => {
  const about = useRef();
  const skill = useRef();
  return (
    <div className="home">
      <Setting />
      <div className="container">
        <div className="home-specialBg" />
        <div className="home-wrap">
          <Banner socialIcon={socialIcon} homeLink={homeLink} />
          <div
            ref={about}
            className={`mt-50 about animated ${IsFadeUp(about)}`}
          >
            <About />
          </div>
          <section className="mt-50 education">
            <Title text={"Education"} icon={<FaBook />} />
            <TimeLine data={educationData} />
          </section>
          <section className="mt-50">
            <Title text={"Skill"} icon={<BsFillLightningFill />} />
            <div
              ref={skill}
              className={`animated mt-50 skill ${IsFadeUp(skill)}`}
            >
              <Skill data={skillsData} />
            </div>
          </section>
          <section className="mt-50 experience">
            <Title text={"Experience"} icon={<BsCalendar2Minus />} />
            <TimeLine data={experienceData} />
          </section>
          <div className="mt-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
