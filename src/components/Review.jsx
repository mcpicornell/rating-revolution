import StarRating from "./StarRating";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { checkIfSingular, formatDate } from "../features/functions";
import { getNumberElementsInArray } from "../features/functions";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { isLoggedUserOrCompany } from "../features/functions";


const Review= ({ review }) => {
  const location = useLocation();
  const date = formatDate(review.date)
  const nav = useNavigate();
  const isCompanyLogged = isLoggedUserOrCompany("company");
  const company = review.company
  const reviewer = review.reviewer

  const navToCompaniesDetailsOnClick = () => {
    if (review) {
      nav(`/hotels/${company.id}`, { state: company });
    }
  };

  switch (location.pathname) {
    case "/":
      return (
        <ContainerHome onClick={navToCompaniesDetailsOnClick}>
          <CompanyPicture
            src={company.photos}
          />
          <ContainerContent>
            <ContainerTopBottom>
              <CompanyName>{company.name}</CompanyName>
              <StarRating rating={review.rating} />
            </ContainerTopBottom>
            <Title>{review.title}:</Title>
            <TextReview>{review.text}</TextReview>
            <ContainerTopBottom>
              <SpanGreyHome>{reviewer.name}</SpanGreyHome>
              <SpanGreyHome>{date}</SpanGreyHome>
            </ContainerTopBottom>
          </ContainerContent>
        </ContainerHome>
      );
    case `/hotels/${company.id}`:
      const reviewString = checkIfSingular(reviewer.reviews);
      return (
        <ContainerReview>
          <ReviewerContainer>
            <ReviewerPicture src={reviewer.avatar} />
            <ReviewerDetailsContainer>
              <SpanName>{reviewer.nickname}</SpanName>
              <ReviewerNumberReviewsContainer>
                <SpanGreyNumber>{reviewer.reviews}</SpanGreyNumber>
                <SpanGreyNumber>{reviewString}</SpanGreyNumber>
              </ReviewerNumberReviewsContainer>
            </ReviewerDetailsContainer>
          </ReviewerContainer>

          <ContainerContent>
            <RatingDateContainer>
              <StarRating rating={review.rating} />
              <SpanGreyDate>{date}</SpanGreyDate>
            </RatingDateContainer>
            <TitleReview>{review.title}</TitleReview>
            <ReviewText>{review.text}</ReviewText>
          </ContainerContent>
          <LikeIconsContainer>
            <SlLikeStyled isCompanyLogged={isCompanyLogged}/>
            <NumberLikes>{review.likes}</NumberLikes>
            <SlDislikeStyled isCompanyLogged={isCompanyLogged}/>
            <NumberLikes>{review.dislikes}</NumberLikes>
          </LikeIconsContainer>
        </ContainerReview>
      );

    case `/profile/${company.id}`:
      const reviewerTotalReviewsProfile = getNumberElementsInArray(reviewer.reviews);
      const reviewStringProfile = checkIfSingular(reviewerTotalReviewsProfile);

      return (
        <ContainerReview>
          <ReviewerContainer>
            <ReviewerPicture src={reviewer.avatar} />
            <ReviewerDetailsContainer>
              <SpanName>{reviewer.nickname}</SpanName>
              <ReviewerNumberReviewsContainer>
                <SpanGreyNumber>{reviewerTotalReviewsProfile}</SpanGreyNumber>
                <SpanGreyNumber>{reviewStringProfile}</SpanGreyNumber>
              </ReviewerNumberReviewsContainer>
            </ReviewerDetailsContainer>
          </ReviewerContainer>

          <ContainerContent>
            <RatingDateContainer>
              <StarRating rating={review.rating} />
              <SpanGreyDate>{date}</SpanGreyDate>
            </RatingDateContainer>
            <TitleReview>{review.title}</TitleReview>
            <ReviewText>{review.text}</ReviewText>
          </ContainerContent>
          <LikeIconsContainer>
            <SlLikeProfile />
            <NumberLikes>{review.likes}</NumberLikes>
            <SlDislikeProfile />
            <NumberLikes>{review.dislikes}</NumberLikes>
          </LikeIconsContainer>
        </ContainerReview>
      );

    default:
      return (
        <>
          <h3>Review cannot be render</h3>
        </>
      );
  }
};

export default Review;

//HOME
const ContainerHome = styled.div`
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
  background: rgba(255, 255, 255, 1);
  border-radius: 12px;
  width: 80%;
  margin-top: 50px;
  margin-left: 3%;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-top: 10px;
  display: grid;
  grid-template-columns: 1fr 5fr;
  align-items: center;
  cursor: pointer;
`;

const ContainerTopBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CompanyPicture = styled.img`
  width: 80%;
  height: 80px;
  border-radius: 10%;
`;

const CompanyName = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const Title = styled.span`
  font-family: Noto Sans;
  font-size: 15px;
  margin-top: 5px;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 10px;
`;

const TextReview = styled.p`
  font-size: 13px;
  font-family: Noto Sans;
  margin-left: 20px;
`;

const SpanGreyHome = styled.span`
  font-style: italic;
  color: rgba(130, 130, 130, 1);
  font-size: 12px;
`;

//REVIEWS
const ContainerReview = styled.div`
  display: grid;
  border: 1px solid rgba(224, 224, 224, 1);
  grid-template-columns: 1fr 4fr;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
  background: rgba(255, 255, 255, 1);
  border-radius: 12px;
  width: 65%;
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-right: 10px;
  padding-bottom: 10px;
  position: relative;
`;

const SpanGrey = styled.span`
  color: rgba(130, 130, 130, 1);
  font-size: 14px;
`;

const SpanGreyDate = styled(SpanGrey)`
  font-size: 12px;
  margin-left: 10px;
`;

const SpanGreyNumber = styled(SpanGrey)`
  margin-right: 2px;
  font-size: 12px;
`;

const SpanName = styled.span`
  color: rgba(130, 130, 130, 1);
`;

const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewerPicture = styled.img`
  width: 50px;
  height: 40px;
  border-radius: 30%;
  margin: 0 auto;
  margin-top: 20px;
`;

const ReviewerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 70%;
  margin-left: 5px;
`;
const ReviewerDetailsContainer = styled.div``;

const ReviewerNumberReviewsContainer = styled.div`
  display: flex;
`;

const LikeIconsContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  display: flex;
  align-items: center;
`;

const SlLikeStyled = styled(SlLike)`
  cursor: ${props => props.isCompanyLogged ? "auto" : "pointer"};
  &:hover {
    color: ${props => props.isCompanyLogged ? "none" : "rgb(0, 255, 0)"};
  }
  margin-right: 10px;
`;
const SlDislikeStyled = styled(SlDislike)`
  cursor: ${props => props.isCompanyLogged ? "auto" : "pointer"};
  &:hover {
    color: ${props => props.isCompanyLogged ? "none" : "red"};
  }
  margin: 0px 10px 0px 20px;
`;

const SlLikeProfile = styled(SlLike)`
  margin-right: 10px;
`;
const SlDislikeProfile = styled(SlDislike)`
  margin: 0px 10px 0px 20px;
`;

const RatingDateContainer = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
`;

const TitleReview = styled.span`
  font-weight: 600;
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const ReviewText = styled.span`
  font-size: 14px;
  margin-bottom: 5px;
`;

const NumberLikes = styled.span``;
