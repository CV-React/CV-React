import React from "react";
import {
  About,
  Banner,
  Education,
  Experience,
  HeaderBg,
  Interest,
  Skill,
  Pricing,
  Blog,
  Contact,
} from "./components";

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
      <Contact />
    </>
  );
};

export default Home;
