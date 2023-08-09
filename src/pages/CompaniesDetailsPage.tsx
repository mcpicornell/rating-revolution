import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CompaniesDetailsPage = () => {
  const location = useLocation();
  const companyObj = location.state;

  return (
    <>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          >
          <SwiperSlide>{companyObj.photos[0]}</SwiperSlide>
          <SwiperSlide>{companyObj.photos[1]}</SwiperSlide>
          <SwiperSlide>{companyObj.photos[2]}</SwiperSlide>
          <SwiperSlide>{companyObj.photos[3]}</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default CompaniesDetailsPage;
