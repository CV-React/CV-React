import React from "react";
import { avatar } from "assets/images";
import { Detail, PlusButton, Social } from "./components";
import { Image, OwnerTitle } from "components";
import "./Banner.scss";

const Banner = () => {
  return (
    <section className="section__banner">
      <div className="container">
        <div className="quick-profile">
          <div className="quick-profile__detail">
            <OwnerTitle />
            <Detail />
            <Social />
          </div>
          <div className="quick-profile__img">
            <Image src={avatar} alt="Avatar" />
            <PlusButton />
            <div className="splash"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
