import React from "react";
import "./Home.scss";
import { homeLink } from "./fake-data";
import LinkItem from "./components/LinkItem/LinkItem";
import {avatar} from 'assets/images'
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home-specialBg" />
        <div className="home-wrap">
          <div className="quick-profile">
              <div className="quick-profile-wrap">
                <div className="quick-profile__left">
                  <h1>Fuze Thien</h1>
                  <h4>Software Engineer & UI/UX Expert</h4>
                  <div className="left-link">
                    {homeLink &&
                      homeLink.map((item, i) => (
                        <LinkItem key={i} value={item} />
                      ))}
                  </div>
                  <div className="quick-profile__left-splash"></div>
                </div>        
                <div className="quick-profile__right">
                  <img src={avatar} alt="avatar" />
                  ad
                </div>

              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
