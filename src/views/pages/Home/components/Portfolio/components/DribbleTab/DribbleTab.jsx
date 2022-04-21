import React from "react";
import DribbleTabItem from "./DribbleTabItem";
import "./DribbleTab.scss";

const DribbleTab = ({ data }) => {
  return (
    <div className="dribbleSlide">
      <div className="dribbleSlide__wrap">
        {data &&
          !!data.length &&
          data.map((item, index) => (
            <div className={`item ${item.classList}`} key={index}>
              <DribbleTabItem item={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default DribbleTab;
