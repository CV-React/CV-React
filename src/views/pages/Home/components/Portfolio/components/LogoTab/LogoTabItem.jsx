import { PortfolioContext } from "context/Context";
import React, { useContext } from "react";

const LogoSlideShowItem = ({ item }) => {
  const { imgUrl, title, type, desc, icon } = item;
  const { setChooseImg, setIsOpenPopup } = useContext(PortfolioContext);

  return (
    <>
      <div className="item__content">
        <figure
          onClick={() => {
            setChooseImg(imgUrl);
            setIsOpenPopup(true);
          }}
        >
          <img src={imgUrl} alt="item Images" />
          <figcaption>
            <div className="item__title">
              <div className="text__center">
                <p className="text__icon">
                  {icon != null && <i className={icon}></i>}
                </p>
                <span>{title}</span>
                <span>{type}</span>
              </div>
            </div>
            <div className="item__description">
              <p>{desc}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export default LogoSlideShowItem;
