import { ColorPalate, Header, ScrollUp } from "components";
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
      <Header />
      <HeaderBg />
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
      <ScrollUp />
      <ColorPalate />
    </>
  );
};

export default Home;
