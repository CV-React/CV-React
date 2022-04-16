import React from "react";

import WebsiteTabItem from "./WebsiteTabItem";
import "./WebsiteTab.scss";

const WebsiteTab = ({ data }) => {
  return (
    <div className="websiteSlideShow">
      <div className="websiteSlideShow__wrap">
        {data &&
          !!data.length &&
          data.map((item, index) => (
            <div className="item" key={index}>
              <WebsiteTabItem item={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default WebsiteTab;
