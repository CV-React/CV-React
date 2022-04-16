import { SectionTitle } from "components";
import { safe } from "assets/images";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <section id="portfolios" className="section">
      <div className="container">
        <SectionTitle title="Portfolios" icon={safe} />
        {/* <div id="portfolios__card" className="row" data-sr-id="26">
          <ul className="nav nav__tabs">
            <li className="waves-effect list__shuffle active">
              <a
                id="all-sample"
                className="active"
                href="#all"
                data-toggle="tab"
                aria-expanded="true"
              >
                ALL
              </a>
            </li>
            <li className="waves-effect list__shuffle">
              <a
                className="cate"
                href="#a"
                data-toggle="tab"
                aria-expanded="false"
              >
                LOGO
              </a>
            </li>
            <li className="waves-effect list__shuffle">
              <a
                className="cate"
                href="#b"
                data-toggle="tab"
                aria-expanded="false"
              >
                DRIBBLE
              </a>
            </li>
            <li className="waves-effect list__shuffle">
              <a
                className="cate"
                href="#c"
                data-toggle="tab"
                aria-expanded="false"
              >
                WEBSITES
              </a>
            </li>
          </ul>

          <div className="tab__content">
            <div id="all" className="active"></div>

            <div id="a" className="">
              <div
                className="col-md-4 col-sm-12 col-xs-12 grid big inLeft InLeft"
                style={{ display: "block" }}
              >
                <figure className="port-effect-scale">
                  <img
                    src="images/portfolios/big-1.jpg"
                    className="img-responsive"
                    alt="portfolio-demo"
                  />
                  <figcaption>
                    <h2>
                      Lightbox <span> IMAGE</span>
                    </h2>
                    <p>Two Hover Effect For Portfolio Grid Blocks. Its Scale</p>
                    <a
                      href="images/portfolios/big-1.jpg"
                      className="popup-image"
                      data-effect="mfp-3d-unfold"
                    >
                      View more
                    </a>
                  </figcaption>
                </figure>
              </div>

              <div
                className="col-md-4 col-sm-6 col-xs-12 grid inRight InRight"
                style={{ display: "block" }}
              >
                <figure className="port-effect-scale">
                  <img
                    src="images/portfolios/portfolio-1.jpg"
                    className="img-responsive"
                    alt="portfolio-demo"
                  />
                  <figcaption>
                    <h2>
                      <i className="fa fa-play-circle" aria-hidden="true"></i>
                      Lightbox <span> Video</span>
                    </h2>
                    <p>I designed this for a client for his cafe.</p>
                    <a
                      className="popup-vimeo"
                      href="https://vimeo.com/45830194"
                    >
                      View more
                    </a>
                  </figcaption>
                </figure>
              </div>

              <div
                className="col-md-4 col-sm-6 col-xs-12 grid inRight InRight"
                style={{ display: "block" }}
              >
                <figure className="port-effect-up">
                  <img
                    src="images/portfolios/portfolio-2.jpg"
                    className="img-responsive"
                    alt="portfolio-demo"
                  />
                  <figcaption>
                    <h2>
                      Lightbox <span> IMAGE</span>
                    </h2>
                    <p>Two Hover Effect For Portfolio Grid Blocks. Its Up</p>
                    <a
                      href="images/portfolios/portfolio-2.jpg"
                      className="popup-image"
                      data-effect="mfp-move-horizontal"
                    >
                      View more
                    </a>
                  </figcaption>
                </figure>
              </div>
            </div>

            <div id="b" className="hide">
              <div
                className="col-md-4 col-sm-12 col-xs-12 grid big inRight InRight"
                style={{ display: "block" }}
              >
                <figure className="port-effect-up">
                  <img
                    src="images/portfolios/big-2.jpg"
                    className="img-responsive"
                    alt="portfolio-demo"
                  />
                  <figcaption>
                    <h2>
                      Lightbox <span> IMAGE</span>
                    </h2>
                    <p>
                      Effect also available for Lightbox Image Check The Doc
                    </p>
                    <a
                      href="images/portfolios/big-2.jpg"
                      className="popup-image"
                      data-effect="mfp-move-from-top"
                    >
                      View more
                    </a>
                  </figcaption>
                </figure>
              </div>

              <div
                className="col-md-4 col-sm-6 col-xs-12 grid inLeft InLeft"
                style={{ display: "block" }}
              >
                <figure className="port-effect-scale">
                  <img
                    src="images/portfolios/portfolio-3.jpg"
                    className="img-responsive"
                    alt="portfolio-demo"
                  />
                  <figcaption>
                    <h2>
                      Lightbox <span> IMAGE</span>
                    </h2>
                    <p>Used latest material design to make this sample</p>
                    <a
                      href="images/portfolios/portfolio-3.jpg"
                      className="popup-image"
                      data-effect="mfp-3d-unfold"
                    >
                      View more
                    </a>
                  </figcaption>
                </figure>
              </div>

              <div
                className="col-md-4 col-sm-6 col-xs-12 grid inLeft InLeft"
                style={{ display: "block" }}
              >
                <figure className="port-effect-up">
                  <img
                    src="images/portfolios/portfolio-4.jpg"
                    className="img-responsive"
                    alt="portfolio-demo"
                  />
                  <figcaption>
                    <h2>
                      Lightbox <span> IMAGE</span>
                    </h2>
                    <p>I designed this for a client for his cafe.</p>
                    <a
                      href="images/portfolios/portfolio-4.jpg"
                      className="popup-image"
                      data-effect="mfp-with-fade"
                    >
                      View more
                    </a>
                  </figcaption>
                </figure>
              </div>
            </div>

            <div id="c" className="hide">
              <div
                className="col-md-4 col-sm-6 col-xs-12 grid inLeft InLeft"
                style={{ display: "block" }}
              >
                <figure className="port-effect-up">
                  <img
                    src="images/portfolios/big-1.jpg"
                    className="img-responsive"
                    alt="portfolio-demo"
                  />
                  <figcaption>
                    <h2>
                      Single <span> PAGE</span>
                    </h2>
                    <p>Showcase Your Portfolio in Details on a Single Page</p>
                    <a href="single-portfolio.html">View more</a>
                  </figcaption>
                </figure>
              </div>

              <div
                className="col-md-4 col-sm-6 col-xs-12 grid inRight InRight"
                style={{ display: "block" }}
              >
                <figure className="port-effect-up">
                  <img
                    src="images/portfolios/big-2.jpg"
                    className="img-responsive"
                    alt="portfolio-demo"
                  />
                  <figcaption>
                    <h2>
                      Single <span> PAGE</span>
                    </h2>
                    <p>Showcase Your Portfolio in Details on a Single Page</p>
                    <a href="single-portfolio.html">View more</a>
                  </figcaption>
                </figure>
              </div>

              <div
                className="col-md-4 col-sm-6 col-xs-12 grid inRight InRight"
                style={{ display: "block" }}
              >
                <figure className="port-effect-up">
                  <img
                    src="images/portfolios/portfolio-1.jpg"
                    className="img-responsive"
                    alt="portfolio-demo"
                  />
                  <figcaption>
                    <h2>
                      Single <span> PAGE</span>
                    </h2>
                    <p>Showcase Your Portfolio in Details on a Single Page</p>
                    <a href="single-portfolio.html">View more</a>
                  </figcaption>
                </figure>
              </div>

              <div
                className="col-md-4 col-sm-6 col-xs-12 grid inLeft InLeft"
                style={{ display: "block" }}
              >
                <figure className="port-effect-up">
                  <img
                    src="images/portfolios/portfolio-2.jpg"
                    className="img-responsive"
                    alt="portfolio-demo"
                  />
                  <figcaption>
                    <h2>
                      Single <span> PAGE</span>
                    </h2>
                    <p>Showcase Your Portfolio in Details on a Single Page</p>
                    <a href="single-portfolio.html">View more</a>
                  </figcaption>
                </figure>
              </div>

              <div
                className="col-md-4 col-sm-6 col-xs-12 grid inRight InRight"
                style={{ display: "block" }}
              >
                <figure className="port-effect-up">
                  <img
                    src="images/portfolios/portfolio-3.jpg"
                    className="img-responsive"
                    alt="portfolio-demo"
                  />
                  <figcaption>
                    <h2>
                      Single <span> PAGE</span>
                    </h2>
                    <p>Showcase Your Portfolio in Details on a Single Page</p>
                    <a href="single-portfolio.html">View more</a>
                  </figcaption>
                </figure>
              </div>

              <div
                className="col-md-4 col-sm-6 col-xs-12 grid inLeft InLeft"
                style={{ display: "block" }}
              >
                <figure className="port-effect-up">
                  <img
                    src="images/portfolios/portfolio-4.jpg"
                    className="img-responsive"
                    alt="portfolio-demo"
                  />
                  <figcaption>
                    <h2>
                      Single <span> PAGE</span>
                    </h2>
                    <p>Showcase Your Portfolio in Details on a Single Page</p>
                    <a href="single-portfolio.html">View more</a>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <button
                id="add-more"
                className="center-block btn-large waves-effect x"
                data-sr-id="27"
              >
                <i
                  id="port-add-icon"
                  className="fa fa-plus"
                  data-sr-id="28"
                ></i>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
