import React, { useEffect, useRef } from "react";
import "./Home.scss";
import {
  educationData,
  experienceData,
  homeLink,
  socialIcon,
  skillsData,
} from "./fake-data";
import { FaBook } from "react-icons/fa";
import TimeLineBlock from "./components/TimeLine/TimeLineBlock";
import { BsCalendar2Minus, BsFillLightningFill } from "react-icons/bs";
import { GoPlusSmall } from "react-icons/go";
import { avatar } from "assets/images";
import { useIntersection } from "hooks/useIntersection";

const Home = () => {
  const banner = useRef();
  const about = useRef();
  const icon = useRef();
  const card = useRef();
  const circle = useRef();
  const animated = useRef();
  return (
    <div className="home">
      <div className="container">
        <div className="home-specialBg" />
        <div className="home-wrap">
          <div
            ref={banner}
            className={`quick-profile animated 
            ${useIntersection(banner, "0px") ? "fadeUpBanner" : ""}`}
          >
            <h3 className="quick-profile__title text--shadow ">Thien Tran</h3>
            <h5
              ref={animated}
              className="quick-profile__subtitle text_white animated text--shadow "
            >
              Software engineer & Web developer
            </h5>
            <div className="quick-profile__content">
              {homeLink?.map((item, i) => (
                <div className="content__item" key={i}>
                  <div className="item__icon">{item.icon}</div>
                  <span className="item__text">{item.data}</span>
                </div>
              ))}
              <div className="content__link ">
                <div className="social">
                  {socialIcon?.map((e, i) => (
                    <span
                      style={{ background: `${e.bg}` }}
                      className="social-icon box_hover animated"
                      key={i}
                    >
                      {e.icon}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="quick-profile__img img">
              <span onClick={() => alert("hello")} className="plus">
                <GoPlusSmall />
              </span>
              <div className="img__wrap">
                <img src={avatar} alt="avatar" />
                <div className="splash"></div>
              </div>
            </div>
          </div>
          <div
            ref={about}
            className={`mt-50 about animated ${
              useIntersection(about, "0px") ? "fadeUp" : ""
            }`}
          >
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
                  <button
                    type="button"
                    className="box_hover btn btn-primary mr-20"
                  >
                    DOWNLOAD CV
                  </button>
                </a>
                <a href="mailto:work.tranthien@gmail.com">
                  <button type="button" className="box_hover btn btn-primary">
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
          <h2 className="mt-50 timeline__title section__title ">
            <span
              ref={animated}
              className={`animated timeline__title_icon ${
                useIntersection(animated, "0px") ? "fadeUp" : ""
              }`}
            >
              <BsFillLightningFill />
            </span>
            Skill
          </h2>
          <div
            ref={animated}
            className={`animated mt-50 skill ${
              useIntersection(animated, "0px") ? "fadeUp" : ""
            }`}
          >
            <div className="skill__wrap">
              {skillsData.map((skill, i) => (
                <div key={i} className="skill__item">
                  <h3 className="item__title text--shadow">{skill.title}</h3>
                  {skill.skillbar.map((skillbar, j) => (
                    <div key={j} className="skillbar">
                      <div className="skillbar__title">{skillbar.title}</div>
                      <div className="skillbar_process">
                        <div style={{ width: `${skillbar.percent}%` }}></div>
                      </div>
                      <div className="skillbar_percent">
                        {skillbar.percent}%
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-50 experience">
            <TimeLineBlock
              data={experienceData}
              title={"Experience"}
              icon={<BsCalendar2Minus />}
            />
          </div>
          <div className="mt-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
