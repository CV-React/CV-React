import React from "react";
import "./About.scss";
const About = () => {
  return (
    <div className="container">
      <div className="about">
        <div className="about__text">
          <p>
            Hello! I’m John Doe. Senior Web Developer with over 13 years of
            experience specializing in front end development. Experienced with
            all stages of the development cycle for dynamic web projects.Having
            an in-depth knowledge including advanced HTML5, CSS, CSS3, SASS,
            LESS, JSON, XML, Java, JavaScript, JQuery, Angular JS. Strong
            background in management and leadership.
          </p>
        </div>
        <div className="about__link">
          <a href="/cv2.pdf" target={"_blank"} rel="noreferrer">
            <button type="button" className="box__hover btn about__btn">
              DOWNLOAD CV
            </button>
          </a>
          <a href="mailto:work.tranthien@gmail.com">
            <button type="button" className="box__hover btn about__btn">
              CONTACT ME
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
