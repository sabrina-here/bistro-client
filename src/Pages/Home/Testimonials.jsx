import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {reviews.map((review) => (
        <SwiperSlide key={review._id}>
          <div>
            <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
            <p>{review.details}</p>
            <h3 className="text-2xl text-orange-400">{review.name}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
