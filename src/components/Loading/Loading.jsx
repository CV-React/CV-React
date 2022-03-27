import React from "react";
import "./style.scss";
const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__object bounce-animation"></div>
      <div className="loading__content">
        <h3
          className="loading__title text--shadow"
          style={{ textAlign: "center" }}
        >
          Thien Tran
        </h3>
        <h5 className="loading__subtitle text_white text--shadow ">
          Software engineer & Web developer
        </h5>
      </div>
    </div>
  );
};

export default Loading;
