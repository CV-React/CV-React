import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { mockData } from "utils/constants/mockData";

const Clients = () => {
  const { clients } = mockData;

  return (
    <div className="clients">
      <div className="card">
        <div className="clients__wrap">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 1000 }}
            slidesPerView={7}
            speed={3000}
            loop={true}
            simulateTouch={false}
          >
            {clients &&
              !!clients.length &&
              clients.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item} alt={`client + ${index}`} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Clients;
