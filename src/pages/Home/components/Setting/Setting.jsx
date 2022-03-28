import React from "react";
import { BsGear } from "react-icons/bs";
import "./Setting.scss";

const Setting = () => {
  const handleChangeColor = () => {
    alert("Change Color");
  };
  return (
    <div onClick={handleChangeColor} className="setting">
      <BsGear className="spin" />
    </div>
  );
};

export default Setting;
