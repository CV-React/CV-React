import React from "react";

import LogoTabItem from "./LogoTabItem";
import "./LogoTab.scss";

const LogoTab = ({ data }) => {
  return (
    <div className="logoSlide ">
      <div className="logoSlide__wrap">
        {data &&
          !!data.length &&
          data.map((item, index) => (
            <div className="item" key={index}>
              <LogoTabItem item={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default LogoTab;
