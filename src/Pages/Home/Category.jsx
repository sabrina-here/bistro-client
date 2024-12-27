import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
// import slide6 from "../../assets/home/slide6.jpg";

// Import Swiper styles
import "swiper/css";
import { Pagination } from "swiper/modules";

export default function Category() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      centeredSlides={true}
      className="mySwiper"
      modules={[Pagination]}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src={slide2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src={slide3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src={slide4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src={slide5} alt="" />
      </SwiperSlide>
      ...
    </Swiper>
  );
}
