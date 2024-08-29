import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = ({ company }) => {
  return (
    <CustomSwiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      nagitation
      loop={true}
    >
      <SwiperSlide>
        <ImgSlider src={company.photos[0]} alt={company.photos[0]} />
      </SwiperSlide>
      <SwiperSlide>
        <ImgSlider src={company.photos[1]} alt={company.photos[1]} />
      </SwiperSlide>
      <SwiperSlide>
        <ImgSlider src={company.photos[2]} alt={company.photos[2]} />
      </SwiperSlide>
    </CustomSwiper>
  );
};
export default Slider;

const ImgSlider = styled.img`
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
  z-index: -1;
`;

const CustomSwiper = styled(Swiper)`
  margin-top: 10px;
  width: 100%;

  .swiper-button-prev {
    background: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    padding: 10px 10px 10px 5px;
    color: #a2bcdd;
    visibility: visible;
  }

  .swiper-button-next {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 10px 5px 10px 10px;
    color: #a2bcdd;
    visibility: visible;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 18px; // Adjust as needed
  }
`;
