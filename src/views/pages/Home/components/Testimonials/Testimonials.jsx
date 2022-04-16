import { handShake } from "assets/images";
import { SectionTitle } from "components";
import Clients from "./components/Clients";
import TestimonialsCard from "./components/TestimonialsCard";
import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <SectionTitle title={"Testimonials"} icon={handShake} />
        <TestimonialsCard />
        <Clients />
      </div>
    </section>
  );
};

export default Testimonials;
