import "./Loading.scss";

const Loading = ({ ...rest }) => {
  return (
    <div id="loading" {...rest}>
      <div id="loading__center">
        <div id="loading__center-absolute">
          <div className="box__holder loadingAnimate bounceInDown">
            <span className="load__box">
              <span className="box__inner"></span>
            </span>
          </div>
          <div className="text__holder text__center">
            <h2>Tran Thien</h2>
            <h6>Software Engineer &amp; UI/UX Expert</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
