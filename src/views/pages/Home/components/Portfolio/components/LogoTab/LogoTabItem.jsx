import React from "react";

const LogoSlideShowItem = ({ item }) => {
  const { imgUrl, title, type, desc, icon } = item;
  console.log(icon);

  return (
    <>
      <div className="item__content">
        <figure>
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
