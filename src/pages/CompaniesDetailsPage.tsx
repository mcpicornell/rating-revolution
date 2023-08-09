import styled from "styled-components";
import { useLocation } from "react-router-dom";
// import 'swiper/swiper-bundle.min.css';
import 'swiper/css';
import Slider from "../components/Slider"
import { ICompany } from "../features/interfaces";
import StarRating from "../components/StarRating";
import { getNumberElementsInArray } from "../features/functions";

const CompaniesDetailsPage = () => {
  const location = useLocation();
  const companyObj: ICompany = location.state;

  const checkIfSingular = (number: number) => {
    if(number === 1) {
      return "Review"
    }
    return "Reviews"
  }

  return (
    <>
      <Header>
        <Title>{companyObj.companyName}</Title>
        <StarInfoContainer>
          <StarRating rating={companyObj.rating} />
          <span>{getNumberElementsInArray(companyObj.reviews)} {checkIfSingular(getNumberElementsInArray(companyObj.reviews))}</span>
        </StarInfoContainer>
      </Header>
      <SliderContainer>
        <Slider />
      </SliderContainer>
    </>
  );
};
export default CompaniesDetailsPage;

const SliderContainer = styled.div`
  margin: 0 auto;
  width: 650px;
  display: flex;
  justify-content: center; 
  align-items: center; 
`;

const Header = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`

`;

const StarInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  width: 200px;
`