import styled from "styled-components";
import { useLocation } from "react-router-dom";
import 'swiper/css';
import Slider from "../components/Slider"
import { ICompany } from "../features/interfaces";
import StarRating from "../components/StarRating";
import { getNumberElementsInArray } from "../features/functions";
import { addSpacesToPhoneNumber } from "../features/functions";

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

  const contactNumberWithSpaces = addSpacesToPhoneNumber(companyObj.contactNumber);
  const numberReviews = getNumberElementsInArray(companyObj.reviews);
  const reviewString = checkIfSingular(getNumberElementsInArray(companyObj.reviews));

  return (
    <PageContainer>
      <HeaderContainer>
        <Header>
            <Title>{companyObj.companyName}</Title>
            <StarInfoContainer>
              <StarRating rating={companyObj.rating} />
              <ReviewSpan>{numberReviews} {reviewString}</ReviewSpan>
            </StarInfoContainer>
          </Header>
          <SubHeader>
              <SpanGrey>{companyObj.adress}</SpanGrey>
              <SpanGrey>{contactNumberWithSpaces}</SpanGrey>
              <SpanGrey>{companyObj.email}</SpanGrey>
          </SubHeader>
      </HeaderContainer>
      
      <SliderContainer>
        <Slider />
      </SliderContainer>
    ; 
      <CardsContainer>
        <CardReviewContainer>
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
        </CardReviewContainer>

        <CardInfoContainer>
          <CardColumn>
            <SpanCardTitle>{companyObj.companyName}</SpanCardTitle>
            <SpanCardDescription>{companyObj.description}</SpanCardDescription>
          </CardColumn>
          <CardColumn>
            <SpanGreyStyled>{companyObj.email}</SpanGreyStyled>
            <SpanGreyStyled>{companyObj.contactNumber}</SpanGreyStyled>
            <SpanGreyStyled>{companyObj.adress}</SpanGreyStyled>
          </CardColumn>
          
          
        </CardInfoContainer>
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
  margin-bottom: 20px;
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
  grid-template-columns: 1fr 1fr;
`;

const CardReviewContainer = styled.div`
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

const CardInfoContainer = styled.div`
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
    background: rgba(255, 255, 255, 1);
    border-radius: 12px;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    align-items: center;
    padding-bottom: 10px;
    padding-right: 5px;
    width: 80%;
    margin: 0 auto;
`;

const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  margin-left: 20px;
  padding-right: 5px;
  position: relative;
`;

const SpanCardTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  position: absolute;
  bottom: 70px;
`;

const SpanCardDescription = styled.span`
  font-size: 12px;
`;

const SpanGreyStyled = styled(SpanGrey)`
  margin: 20px 0px 20px 0px;
  font-size: 10px;
`;