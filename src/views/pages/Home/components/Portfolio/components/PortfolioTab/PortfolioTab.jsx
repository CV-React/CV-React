const PortfolioTab = ({ value, isShowPlusBtn, filter, id }) => {
  const { imgUrl, title, type, desc } = value;

  const classList =
    id === 1
      ? "col-md-4 col-sm-12 col-xs-12 grid big inLeft"
      : "col-md-4 col-sm-6 col-xs-12 grid inRight";
  return (
    <>
      <div className={classList}>
        <div className="container">
          <div className="websiteSlideShow__wrap">
            <div className="item__content">
              <figure>
                <img src={imgUrl} alt="item Images" />
                <figcaption>
                  <div className="item__title">
                    <div className="text__center">
                      <p className="text__icon">
                        {/* {icon && <i className={icon}></i>} */}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioTab;
