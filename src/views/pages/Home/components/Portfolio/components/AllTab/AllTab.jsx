import React from "react";
import LogoSlideShowItem from "../WebsiteTab/WebsiteTabItem";
import DribbleSlideShowItem from "../DribbleTab/DribbleTabItem";
import WebsiteSlideShowItem from "../WebsiteTab/WebsiteTabItem";
import "./AllTab.scss";

const AllTab = ({ data, isShowPlusBtn }) => {
  const logoData = data.filter((e) => e.filter.includes("LOGO"));
  const dribbleData = data.filter((e) => e.filter.includes("DRIBBLE"));
  const websiteData = data.filter((e) => e.filter.includes("WEBSITES"));
  return (
    <div className="all">
      <div className="all__wrap">
        {logoData &&
          !!logoData.length &&
          logoData.map((item, index) => (
            <div className="item" key={index}>
              <LogoSlideShowItem item={item} />
            </div>
          ))}
        {dribbleData &&
          !!dribbleData.length &&
          dribbleData.map((item, index) => (
            <div className="item" key={index}>
              <DribbleSlideShowItem item={item} />
            </div>
          ))}
        {websiteData &&
          !!websiteData.length &&
          websiteData.map((item, index) => (
            <div className="item" key={index}>
              <WebsiteSlideShowItem item={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllTab;
