import React, { useRef } from "react";
import { useIntersection } from "hooks/useIntersection";
const TimeLine = ({ data, index }) => {
  const animated = useRef();
  const { degree, schoolName, time, desc, icon } = data;
  const isRight = () => {
    if (index % 2 === 0) return true;
    return false;
  };
  return (
    <div className={`timeline__block ${isRight() ? "flex-start" : "flex-end"}`}>
      <div
        ref={animated}
        className={`timeline__card animate_delay animated ${
          useIntersection(animated, "0px") ? "fadeUp" : ""
        } card ${isRight() ? "card-left" : "card-right"}`}
      >
        <div
          ref={animated}
          className={`timeline-circle animated  ${
            useIntersection(animated, "0px") ? "fadeUp" : ""
          }`}
          style={isRight() ? { right: -85 } : { left: -84 }}
        >
          <span>{icon}</span>
        </div>
        <div className="card__degree">
          <h5>{degree}</h5>
        </div>
        <div className="card__school_name">
          <span>{schoolName}</span>
        </div>
        <div className="card__time">
          <span>{time}</span>
        </div>
        <div className="card__desc">
          <span>{desc}</span>
        </div>
        {data.extra && (
          <div className="card__more">
            <button type="button" onClick={() => alert("Hello")}>
              ...
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
const TimeLineBlock = ({ data, title, icon }) => {
  const animated = useRef();
  return (
    <div className="timeline">
      <h2 className="timeline__title section__title ">
        <span
          ref={animated}
          className={`animated timeline__title_icon ${
            useIntersection(animated, "0px") ? "fadeUp" : ""
          }`}
        >
          {icon}
        </span>
        {title}
      </h2>
      <div className="timeline__inner">
        {data?.map((edu, i) => (
          <TimeLine index={i} key={i} data={edu} />
        ))}
      </div>
    </div>
  );
};
export default TimeLineBlock;
