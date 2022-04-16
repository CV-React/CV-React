import { ColorPalate, Header, ScrollUp } from "components";
import React, { useState } from "react";
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
  Portfolio,
  Testimonials,
} from "./components";

const Home = () => {
  const [color, setColor] = useState("green");

  return (
    <div className={color}>
      <Header />
      <HeaderBg />
      <Banner />
      <About />
      <Education />
      <Skill />
      <Experience />
      <Portfolio />
      <Interest />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      <ScrollUp />
      <ColorPalate setColor={setColor} />
    </div>
  );
};

export default Home;
