import React from "react";
import "../../../../../App.scss";

const Enjoy = ({ icon, name, bgColor, color }) => {
  return (
    <div style={{ background: bgColor, color: color }} className='enjoy__item'>
      <i className={icon}></i>
      <span>{name}</span>
    </div>
  );
};

export default Enjoy;
