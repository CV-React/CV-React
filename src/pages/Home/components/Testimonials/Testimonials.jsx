import { handShake } from "assets/images";
import { SectionTitle } from "components";
import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <SectionTitle title={"Testimonials"} icon={handShake} />
      </div>
    </section>
  );
};

export default Testimonials;
