import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const CompaniesDetailsPage = () => {
  const location = useLocation();
  const companyObj = location.state;

  return (
        <CustomSwiper
        modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          >
          <SwiperSlide>
            <ImgSlider src={companyObj.photos[0]} alt={companyObj.photos[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <ImgSlider src={companyObj.photos[1]} alt={companyObj.photos[1]} />
          </SwiperSlide>
          <SwiperSlide>
            <ImgSlider src={companyObj.photos[2]} alt={companyObj.photos[2]} />
          </SwiperSlide>
        </CustomSwiper>
  );
};
export default CompaniesDetailsPage;

const ImgSlider = styled.img`
  width: 100%;
  border-radius: 5px;
`

const CustomSwiper = styled(Swiper)`
margin-top: 10px;
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
`;