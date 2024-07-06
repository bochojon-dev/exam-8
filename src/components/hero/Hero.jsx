import React from "react";
import hero from "../../assets/hero-image.png";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <Swiper
          modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div className="hero_contents">
              <div className="hero_texts">
                <h3>
                  Скидка 15% <br /> на все подвесные светильники <br />
                  <span>до 5 февраля</span>
                </h3>
              </div>
              <img src={hero} alt="hero image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero_contents">
              <div className="hero_texts">
                <h3>
                  Скидка 15% <br /> на все подвесные светильники <br />
                  <span>до 5 февраля</span>
                </h3>
              </div>
              <img src={hero} alt="hero image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero_contents">
              <div className="hero_texts">
                <h3>
                  Скидка 15% <br /> на все подвесные светильники <br />
                  <span>до 5 февраля</span>
                </h3>
              </div>
              <img src={hero} alt="hero image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero_contents">
              <div className="hero_texts">
                <h3>
                  Скидка 15% <br /> на все подвесные светильники <br />
                  <span>до 5 февраля</span>
                </h3>
              </div>
              <img src={hero} alt="hero image" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
