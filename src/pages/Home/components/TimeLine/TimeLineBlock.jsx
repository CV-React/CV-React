import React, { useRef } from "react";
import { IsFadeUp } from "hooks/useIntersection";

const TimeLine = ({ data }) => {
  return (
    <div className="timeline">
      <div className="timeline__inner">
        {data?.map((edu, i) => (
          <Card index={i} key={i} data={edu} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ data, index }) => {
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
        className={`timeline__card animated ${IsFadeUp(animated)} card ${
          isRight() ? "card-left" : "card-right"
        }`}
      >
        <div
          ref={animated}
          className={`timeline-circle animated  ${IsFadeUp(animated)}`}
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

export default TimeLine;
