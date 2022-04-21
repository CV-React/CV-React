import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { mockData } from "utils/constants/mockData";
import SlideInner from "./SlideInner";

const TestimonialsCard = () => {
  const { testimonials } = mockData;

  return (
    <div className="testimonials__card">
      <div className="wrap">
        <Swiper
          modules={[Pagination]}
          autoHeight={true}
          pagination={{ clickable: true }}
        >
          {testimonials &&
            !!testimonials.length &&
            testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <SlideInner
                  img={item.img}
                  desc={item.desc}
                  signature={item.signature}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialsCard;
