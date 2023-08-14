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

  const numberReviewsByRating = (number: number) => {
    let numberReviews = 0;
    for(let i = 0; i < companyObj.reviews.length; i++){
      if(companyObj.reviews[i].rating === number){
        numberReviews++;
      }
    }
    return numberReviews;
  }

  return (
    <PageContainer>
      <HeaderContainer>
        <Header>
            <Title>{companyObj.companyName}</Title>
            <StarInfoContainer>
              <StarRating rating={companyObj.rating} />
              <ReviewSpan>{getNumberElementsInArray(companyObj.reviews)} {checkIfSingular(getNumberElementsInArray(companyObj.reviews))}</ReviewSpan>
            </StarInfoContainer>
          </Header>
          <SubHeader>
              <SpanGrey>C/Crime Alley, 1939</SpanGrey>
              <SpanGrey>+34 666 666 666</SpanGrey>
              <SpanGrey>email@example.com</SpanGrey>
          </SubHeader>
      </HeaderContainer>
      
      <SliderContainer>
        <Slider />
      </SliderContainer>
    ; 
      <CardsContainer>
        <InfoCardContainer>
          <CardStarRating>            
            <StarRating rating={5} />
            <ReviewSpan>{numberReviewsByRating(5)} {checkIfSingular(numberReviewsByRating(5))}</ReviewSpan>
          </CardStarRating>
          <CardStarRating>            
            <StarRating rating={4} />
            <ReviewSpan>{numberReviewsByRating(4)} {checkIfSingular(numberReviewsByRating(4))}</ReviewSpan>
          </CardStarRating>
          <CardStarRating>            
            <StarRating rating={3} />
            <ReviewSpan>{numberReviewsByRating(3)} {checkIfSingular(numberReviewsByRating(3))}</ReviewSpan>
          </CardStarRating>
          <CardStarRating>            
            <StarRating rating={2} />
            <ReviewSpan>{numberReviewsByRating(2)} {checkIfSingular(numberReviewsByRating(2))}</ReviewSpan>
          </CardStarRating>
          <CardStarRating>            
            <StarRating rating={1} />
            <ReviewSpan>{numberReviewsByRating(1)} {checkIfSingular(numberReviewsByRating(1))}</ReviewSpan>
          </CardStarRating>
        </InfoCardContainer>
        <InfoCardContainer>

        </InfoCardContainer>
        <InfoCardContainer>

        </InfoCardContainer>
      </CardsContainer>
      
    </PageContainer>
  );
};
export default CompaniesDetailsPage;

const PageContainer = styled.div`
  margin: 0 auto;
  margin-top: 1px;
  width: 100%;
  border-radius: 24px;
`;

const SliderContainer = styled.div`
  margin: 0 auto;
  width: 60%;
  display: flex;
  justify-content: center; 
  align-items: center; 
`;

const HeaderContainer = styled.div`
  background: rgba(255, 255, 255, 1);
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.05);
  padding-bottom: 15px;
`;

const Header = styled.div`
  width: 80%;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px;
`;

const SubHeader = styled.div`
    width: 65%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
`;

const Title = styled.h3`

`;

const StarInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const CardStarRating = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 70%;
  margin: 5px;
`;

const SpanGrey = styled.span`
  font-style: italic;
  color: rgba(130, 130, 130, 1);
  font-size: 12px;
`;

const ReviewSpan = styled.span`
  margin-left: 10px;
  font-size: 14px;
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const InfoCardContainer = styled.div`
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
    background: rgba(255, 255, 255, 1);
    border-radius: 12px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 10px;
    width: 80%;
    margin: 0 auto;
`;

