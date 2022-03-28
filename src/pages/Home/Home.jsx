import React from "react";
import {
  About,
  Banner,
  Education,
  Experience,
  Setting,
  Skill,
} from "./components";
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        {/* <Menu /> */}
        <Setting />
        <Banner />
        <About />
        <Education />
        <Skill />
        <Experience />
        {/* <Portfolio /> */}
      </div>
    </div>
  );
};

export default Home;
