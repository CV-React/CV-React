import React from "react";
import { GoPlusSmall } from "react-icons/go";
import { avatar } from "assets/images";
const Banner = ({ ownerDetail, socials }) => {
  return (
    <div className="quick-profile">
      <div className="quick-profile__container">
        <h3 className="owner__title text__shadow ">Thien Tran</h3>
        <h5 className="owner__subtitle text__white text__shadow ">
          Software engineer & Web developer
        </h5>
        <div className="quick-profile__detail">
          <div className="detail__wrap">
            {ownerDetail &&
              ownerDetail.map((item, index) => (
                <div className="detail__item" key={index}>
                  <div className="item__icon">{item.icon}</div>
                  <span className="item__text">{item.data}</span>
                </div>
              ))}
          </div>
          <div className="content__link ">
            <div className="social__wrap">
              {socials &&
                socials.map((social, index) => (
                  <span
                    style={{ background: `${social.bg}` }}
                    className="social__item box__hover"
                    key={index}
                  >
                    {social.icon}
                  </span>
                ))}
            </div>
          </div>
        </div>
        <div className="quick-profile__img">
          <span onClick={() => alert("hello")} className="plus">
            <GoPlusSmall />
          </span>
          <div className="img__wrap">
            <img src={avatar} alt="avatar" />
            <div className="splash"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
