import React from "react";
import {
  About,
  Banner,
  Education,
  Experience,
  HeaderBg,
  Interest,
  Setting,
  Skill,
  Pricing,
  Blog,
} from "./components";

import "../../index.scss";

const Home = () => {
  return (
    <>
      {/* <Menu /> */}
      <HeaderBg />
      {/* <Setting /> */}
      <Banner />
      <About />
      <Education />
      <Skill />
      <Experience />
      {/* <Portfolio /> */}
      <Interest />
      {/* <Testimonials /> */}
      <Pricing />
      <Blog />
    </>
  );
};

export default Home;
