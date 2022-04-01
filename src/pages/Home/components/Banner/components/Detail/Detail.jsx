import React from "react";
import { ownerDetail } from "constants/mockData";
import "./Detail.scss";

const Detail = () => {
  return (
    <div className="detail__wrap">
      {ownerDetail &&
        ownerDetail.map((item, index) => (
          <div className="detail__item" key={index}>
            <div className="item__icon">{item.icon}</div>
            <span className="item__text">{item.data}</span>
          </div>
        ))}
    </div>
  );
};

export default Detail;
