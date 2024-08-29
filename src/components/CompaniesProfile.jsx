import styled from "styled-components";
import "swiper/css";
import Slider from "../components/Slider";
import StarRating from "./StarRating";
import { getNumberElementsInArray } from "../features/functions";
import { addSpacesToPhoneNumber } from "../features/functions";
import Review from "./Review";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { checkIfSingular } from "../features/functions";


export const CompaniesProfile = ({ company }) => {
  let cardRating = [];

  const reviewData = [...company.reviews];
  const reviewDataOrdered = reviewData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const contactNumberWithSpaces = addSpacesToPhoneNumber(
    company.phone
  );
  const numberReviews = getNumberElementsInArray(company.reviews);
  const reviewString = checkIfSingular(
    getNumberElementsInArray(company.reviews)
  );

  if (company.reviews) {
    for (let i = 5; i > 0; i--) {
      cardRating.push(
        <CardStarRating>
          <StarRating rating={i} />
          <ReviewSpan>
            {company.total_reviews}{" "}
            {checkIfSingular(company.total_reviews(i))}
          </ReviewSpan>
        </CardStarRating>
      );
    }
  }

  return (
    <PageContainer>
      <HeaderContainer>
        <Header>
          <Title>{company.name}</Title>
          <StarInfoContainer>
            <StarRating rating={company.rating} />
            <ReviewSpan>
              {numberReviews} {reviewString}
            </ReviewSpan>
          </StarInfoContainer>
        </Header>
        <SubHeader>
          <SubHeaderElementContainer>
            <MdLocationOnStyled />
            <SpanGrey>{company.address}</SpanGrey>
          </SubHeaderElementContainer>
          <SubHeaderElementContainer>
            <BsFillTelephoneFillStyled />
            <SpanGrey>{contactNumberWithSpaces}</SpanGrey>
          </SubHeaderElementContainer>
          <SubHeaderElementContainer>
            <HiMailStyled />
            <SpanGrey>{company.email}</SpanGrey>
          </SubHeaderElementContainer>
        </SubHeader>
      </HeaderContainer>

      <SliderContainer>
        <Slider company={company} />
      </SliderContainer>

      <CardsContainer>
        <CardReviewContainer>{cardRating}</CardReviewContainer>

        <CardInfoContainer>
          <SpanCardTitle>{company.name}</SpanCardTitle>
          <SpanCardDescription>{company.description}</SpanCardDescription>
          <CardInfoContactContainer>
            <ContactContainer>
              <HiMail />
              <SpanGreyStyled>{company.email}</SpanGreyStyled>
            </ContactContainer>
            <ContactContainer>
              <BsFillTelephoneFill />
              <SpanGreyStyled>{contactNumberWithSpaces}</SpanGreyStyled>
            </ContactContainer>
            <ContactContainer>
              <MdLocationOn />
              <SpanGreyStyled>{company.address}</SpanGreyStyled>
            </ContactContainer>
          </CardInfoContactContainer>
        </CardInfoContainer>
      </CardsContainer>
      <CommentsContainer>
        {reviewDataOrdered.map((reviewObj) => (
          <Review key={reviewObj.id} reviewObj={reviewObj} />
        ))}
      </CommentsContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  margin: 0 auto;
  margin-top: 1px;
  width: 100%;
  border-radius: 24px;
  margin-bottom: 20px;
`;

const SliderContainer = styled.div`
  margin: 0 auto;
  width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled.div`
  background: rgba(255, 255, 255, 1);
  box-shadow: 0.5px 0px 0px 1px rgba(0, 0, 0, 0.05);
  padding-bottom: 15px;
  margin-bottom: 10px;
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

const SubHeaderElementContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HiMailStyled = styled(HiMail)`
  margin-right: 10px;
  color: rgba(130, 130, 130, 1);
`;

const BsFillTelephoneFillStyled = styled(BsFillTelephoneFill)`
  margin-right: 10px;
  color: rgba(130, 130, 130, 1);
`;

const MdLocationOnStyled = styled(MdLocationOn)`
  margin-right: 10px;
  color: rgba(130, 130, 130, 1);
`;

const Title = styled.h3``;

const StarInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 70%;
`;

const CardReviewContainer = styled.div`
  box-shadow: 0.5px 0.5px 2px 2px rgba(0, 0, 0, 0.05);
  background: rgba(255, 255, 255, 1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 10px;
  width: 300px;
  margin: 0 auto;
`;

const CardInfoContainer = styled.div`
  box-shadow: 0.5px 0.5px 2px 2px rgba(0, 0, 0, 0.05);
  background: rgba(255, 255, 255, 1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  padding-right: 5px;
  width: 300px;
  margin: 0 auto;
  padding-left: 20px;
  padding-top: 20px;
`;

const SpanCardTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const SpanCardDescription = styled.span`
  font-size: 12px;
  margin-top: 15px;
`;

const SpanGreyStyled = styled(SpanGrey)`
  font-size: 12px;
  color: black;
  margin-left: 10px;
`;

const CardInfoContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactContainer = styled.div`
  display: flex;
  margin-top: 15px;
`;

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
