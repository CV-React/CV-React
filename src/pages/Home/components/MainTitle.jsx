import React from "react";

const MainTitle = ({ text, icon }) => {
  return (
    <div className="title">
      <span className="title-icon">{icon}</span>
      <span className="title-text">{text}</span>
    </div>
  );
};

export default MainTitle;
