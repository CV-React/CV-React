import React from "react";

const About = () => {
  return (
    <div className="about-wrap">
      <div className="about-text">
        <p>
          Hello! I’m John Doe. Senior Web Developer with over 13 years of
          experience specializing in front end development. Experienced with all
          stages of the development cycle for dynamic web projects.Having an
          in-depth knowledge including advanced HTML5, CSS, CSS3, SASS, LESS,
          JSON, XML, Java, JavaScript, JQuery, Angular JS. Strong background in
          management and leadership.
        </p>
      </div>
      <div className="about-cv">
        <a href="/cv2.pdf" target={"_blank"} rel="noreferrer">
          <button type="button" className="box_hover btn btn-primary mr-20">
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
  );
};

export default About;
