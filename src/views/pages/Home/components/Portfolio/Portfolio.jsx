import React, { useMemo, useState } from "react";
import "./Portfolio.scss";
import { SectionTitle } from "components";
import { safe } from "assets/images";
import { mockData } from "utils/constants/mockData";
import { PortfolioContext } from "context/Context";
import AllTab from "./components/AllTab/AllTab";
import DribbleTab from "./components/DribbleTab/DribbleTab";
import WebsiteTab from "./components/WebsiteTab/WebsiteTab";
import LogoTab from "./components/LogoTab/LogoTab";

const Portfolio = () => {
  const [isShowPlusBtn, setIsShowPlusBtn] = useState(false);
  const [filter, setFilter] = useState("ALL");
  const [chooseImg, setChooseImg] = useState();
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const { portfolio } = mockData;
  const { filterList, item } = portfolio;

  const handleClick = (e) => {
    setIsShowPlusBtn(false);
    setFilter(e.target.innerText);
  };

  const handleClosePopup = () => {
    setIsOpenPopup(false);
  };

  const handleVisible = () => {
    setIsShowPlusBtn(!isShowPlusBtn);
  };

  const filterData = useMemo(() => {
    let newFilterData = item.filter((e) => e.filter.includes(filter));
    if (!isShowPlusBtn && filter === "ALL") return newFilterData.slice(0, 3);
    return newFilterData;
  }, [filter, item, isShowPlusBtn]);

  return (
    <PortfolioContext.Provider
      value={{ chooseImg, setChooseImg, setIsOpenPopup }}
    >
      <section id="portfolios" className="portfolio">
        <div className="container">
          <SectionTitle title="Portfolios" icon={safe} />
          <div className="lightBox animated">
            <div className="lightBox__btn">
              {filterList &&
                !!filterList.length &&
                filterList.map((data, index) => (
                  <button
                    key={index}
                    onClick={handleClick}
                    className={data === filter ? "navBtn active" : "navBtn"}
                  >
                    {data}
                  </button>
                ))}
            </div>
            <div className="portfolio__wrap">
              {filter === "ALL" ? (
                <AllTab isShowPlusBtn={isShowPlusBtn} data={filterData} />
              ) : filter === "LOGO" ? (
                <LogoTab data={filterData} />
              ) : filter === "DRIBBLE" ? (
                <DribbleTab data={filterData} />
              ) : (
                <WebsiteTab data={filterData} />
              )}
            </div>
            <button
              onClick={handleVisible}
              className={filter !== "ALL" ? "hidden" : "lightBox__visible"}
            >
              <i
                className={
                  isShowPlusBtn ? "fa-solid fa-angles-up" : "fa fa-plus"
                }
              ></i>
            </button>
          </div>
          <div
            onClick={handleClosePopup}
            className={
              isOpenPopup ? "portfolio__popup active" : "portfolio__popup"
            }
          >
            <div className="content">
              <figure>
                <img src={chooseImg} alt="choose" />
                <i className="fa fa-close"></i>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </PortfolioContext.Provider>
  );
};

export default Portfolio;
