import React, { useEffect, useState } from "react";
import { BsGear } from "react-icons/bs";
const SettingIcon = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleChangeColor = () => {
    alert("Change Color");
  };
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      onClick={handleChangeColor}
      className={` ${scrollPosition > 280 ? "bgBlack gear" : "gear"}`}
    >
      <BsGear className="spin" />
    </div>
  );
};

export default SettingIcon;
