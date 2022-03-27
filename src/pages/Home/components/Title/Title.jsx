import React, { useRef } from "react";
import { IsFadeUp } from "hooks/useIntersection";

const Title = ({ text, icon }) => {
  const fade = useRef();
  return (
    <h2 className="timeline__title ">
      <span
        ref={fade}
        className={`animated timeline__title_icon ${IsFadeUp(fade)}`}
      >
        {icon}
      </span>
      {text}
    </h2>
  );
};

export default Title;
