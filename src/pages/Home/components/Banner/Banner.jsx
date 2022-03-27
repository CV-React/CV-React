import React, { useRef } from "react";
import { GoPlusSmall } from "react-icons/go";
import { avatar } from "assets/images";
import { useIntersection } from "hooks/useIntersection";
const Banner = ({ homeLink, socialIcon }) => {
  const banner = useRef();
  const animated = useRef();
  return (
    <div
      ref={banner}
      className={`quick-profile animated 
    ${useIntersection(banner, "0px") ? "fadeUpBanner" : ""}`}
    >
      <h3 className="quick-profile__title text--shadow ">Thien Tran</h3>
      <h5
        ref={animated}
        className="quick-profile__subtitle text_white text--shadow "
      >
        Software engineer & Web developer
      </h5>
      <div className="quick-profile__content">
        {homeLink?.map((item, i) => (
          <div className="content__item" key={i}>
            <div className="item__icon">{item.icon}</div>
            <span className="item__text">{item.data}</span>
          </div>
        ))}
        <div className="content__link ">
          <div className="social">
            {socialIcon?.map((e, i) => (
              <span
                style={{ background: `${e.bg}` }}
                className="social-icon box_hover animated"
                key={i}
              >
                {e.icon}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="quick-profile__img img">
        <span onClick={() => alert("hello")} className="plus">
          <GoPlusSmall />
        </span>
        <div className="img__wrap">
          <img src={avatar} alt="avatar" />
          <div className="splash"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
