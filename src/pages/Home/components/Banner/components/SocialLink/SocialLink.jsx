import { mockData } from "constants/mockData";
import React from "react";
import "index.scss";
import "./SocialLink.scss";

const SocialLink = () => {
  const { socials } = mockData;
  return (
    <div className="social">
      <div className="social__wrap">
        {socials &&
          socials.map((social, index) => (
            <div
              style={{ background: `${social.bg}` }}
              className="social__item box__hover"
              key={index}
            >
              <a href={social.link} target="_blank" rel="noreferrer">
                <div className="item__wrap">{social.icon}</div>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SocialLink;
