import React from "react";
import "./Home.scss";
import {
  homeLink,
  socialIcon,
  educationData,
  experienceData,
} from "./fake-data";
import { GoPlusSmall } from "react-icons/go";
import { FaBook } from "react-icons/fa";
import TimeLineBlock from "./components/TimeLine/TimeLineBlock";
import { BsCalendar2Minus } from "react-icons/bs";
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home-specialBg" />
        <div className="home-wrap">
          <div className="quick-profile">
            <div className="quick-profile-wrap">
              <div className="quick-profile__left">
                <span onClick={() => alert("hello")} className="plus">
                  <GoPlusSmall />
                </span>
                <h1>Fuze Thien</h1>
                <h4>Software Engineer & UI/UX Expert</h4>
                <div className="left-link">
                  {homeLink?.map((item, i) => (
                    <div key={i}>
                      <span>{item.icon}</span>
                      <span>{item.data}</span>
                    </div>
                  ))}
                </div>
                <div className="social">
                  {socialIcon?.map((e, i) => (
                    <span className="social-icon" key={i}>
                      {e.icon}
                    </span>
                  ))}
                </div>
                <div className="quick-profile__left-splash"></div>
              </div>
              <div className="quick-profile__right"></div>
            </div>
          </div>
          <div className="mt-50 about">
            <div className="about-wrap">
              <div className="about-text">
                <p>
                  Hello! I’m John Doe. Senior Web Developer with over 13 years
                  of experience specializing in front end development.
                  Experienced with all stages of the development cycle for
                  dynamic web projects.Having an in-depth knowledge including
                  advanced HTML5, CSS, CSS3, SASS, LESS, JSON, XML, Java,
                  JavaScript, JQuery, Angular JS. Strong background in
                  management and leadership.
                </p>
              </div>
              <div className="about-cv">
                <a href="/cv2.pdf" target={"_blank"} rel="noreferrer">
                  <button type="button" className="btn btn-primary mr-20">
                    DOWNLOAD CV
                  </button>
                </a>
                <a href="mailto:work.tranthien@gmail.com">
                  <button type="button" className="btn btn-primary">
                    CONTACT ME
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-50 education">
            <TimeLineBlock
              data={educationData}
              title={"Education"}
              icon={<FaBook />}
            />
          </div>
          <div className="mt-50 skill">Skill</div>
          <div className="mt-50 experience">
            <TimeLineBlock
              data={experienceData}
              title={"Experience"}
              icon={<BsCalendar2Minus />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
