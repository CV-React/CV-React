import React from "react";
import { mockData } from "utils/constants/mockData";
import "./Detail.scss";

const Detail = () => {
  const { ownerDetail } = mockData;
  return (
    <div className="detail__wrap">
      {ownerDetail &&
        !!ownerDetail.length &&
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
