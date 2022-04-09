import { handShake } from "assets/images";
import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section__title">
          <h4 className="text__uppercase text__center">
            <img src={handShake} alt="demo" />
            Testimonials
          </h4>
        </div>
        <div className="testimonials__wrap">
          <div className="wrap">
            <button>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <div className="scroll">
              <ul className="items">
                <li
                  className="item"
                  style={{
                    backgroundImage:
                      "url(https://farm6.staticflickr.com/5076/14164379250_71c3a5b32a_b.jpg)",
                  }}
                >
                  HAMBURG
                </li>
                <li
                  className="item"
                  style={{
                    backgroundImage:
                      "url(https://farm3.staticflickr.com/2937/14371160993_186df4a083_b.jpg)",
                  }}
                >
                  URBAN LIGHTS
                </li>
                <li
                  className="item"
                  style={{
                    backgroundImage:
                      "url(https://farm3.staticflickr.com/2914/14185397280_e51c40b1df_b.jpg)",
                  }}
                >
                  SOUNDS
                </li>
              </ul>
            </div>
            <button>
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
