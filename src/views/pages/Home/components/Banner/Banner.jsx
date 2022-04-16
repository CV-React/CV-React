import React from "react";
import { avatar } from "assets/images";
import { Detail, PlusButton, Social } from "./components";
import "./Banner.scss";

const Banner = () => {
  return (
    <section id="banner" className="banner animated animateBanner">
      <div className="container">
        <div className="quick-profile">
          <div className="quick-profile__detail">
            <div className="owner">
              <h3 className="owner__title text__uppercase">Thien Tran</h3>
              <h5 className="owner__subTitle text__white">
                Software engineer & Web developer
              </h5>
            </div>
            <Detail />
            <Social />
          </div>
          <div className="quick-profile__img">
            <img src={avatar} alt="Avatar" />
            <PlusButton />
            <div className="splash"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
