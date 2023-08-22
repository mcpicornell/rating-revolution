import { FC } from "react";
import StarRating from "./StarRating";
import { IReview } from "../features/interfaces";
import { useEffect } from "react";
import { getUserById } from "../features/users/fetchUsers";
import { useState } from "react";
import { getCompanyById } from "../features/companies/fetchCompanies";
import { ICompany, IUser } from "../features/interfaces";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { checkIfSingular, getRandomIndex } from "../features/functions";
import { getNumberElementsInArray } from "../features/functions";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";

type ReviewProps = {
  reviewObj: IReview;
};

const Review: FC<ReviewProps> = ({ reviewObj }) => {
  const [companyObj, setCompanyObj] = useState<ICompany | null>(null);
  const [user, setUser] = useState<IUser | null>(null);
  const location = useLocation();
  const date = new Date(reviewObj!.date).toDateString();
  const nav = useNavigate();

  const navToCompaniesDetailsOnClick = () => {
    if (reviewObj) {
      nav(`/hotels/${reviewObj?.companyId}`, { state: companyObj });
    }
  };

  useEffect(() => {
    const fetchCompany = async () => {
      const fetchedCompany = await getCompanyById(reviewObj!.companyId);
      setCompanyObj(fetchedCompany);
    };

    if (!companyObj) {
      fetchCompany();
    }
  }, [companyObj, reviewObj]);

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await getUserById(reviewObj!.userId);
      setUser(fetchedUser);
    };

    if (!user) {
      fetchUser();
    }
  }, [user, reviewObj]);

  switch (location.pathname) {
    case "/":
      return (
        <ContainerHome onClick={navToCompaniesDetailsOnClick}>
          <CompanyPicture
            src={companyObj?.photos[getRandomIndex(companyObj?.photos)]}
          />
          <ContainerContent>
            <ContainerTopBottom>
              <CompanyName>{companyObj?.companyName}</CompanyName>
              <StarRating rating={reviewObj!.rating} />
            </ContainerTopBottom>
            <Title>{reviewObj!.reviewTitle}:</Title>
            <TextReview>{reviewObj!.reviewText}</TextReview>
            <ContainerTopBottom>
              <SpanGreyHome>{user?.name}</SpanGreyHome>
              <SpanGreyHome>{date}</SpanGreyHome>
            </ContainerTopBottom>
          </ContainerContent>
        </ContainerHome>
      );
    case `/hotels/${companyObj?.companyId}`:
      const userTotalReviews = getNumberElementsInArray(user?.reviews);
      const reviewString = checkIfSingular(userTotalReviews);
      return (
        <ContainerReview>
          <UserContainer>
            <UserPicture src={user?.profilePicture} />
            <UserDetailsContainer>
              <SpanName>{user?.nickName}</SpanName>
              <UserNumberReviewsContainer>
                <SpanGreyNumber>{userTotalReviews}</SpanGreyNumber>
                <SpanGreyNumber>{reviewString}</SpanGreyNumber>
              </UserNumberReviewsContainer>
            </UserDetailsContainer>
          </UserContainer>

          <ContainerContent>
            <RatingDateContainer>
              <StarRating rating={reviewObj!.rating} />
              <SpanGreyDate>{date}</SpanGreyDate>
            </RatingDateContainer>
            <TitleReview>{reviewObj.reviewTitle}</TitleReview>
            <ReviewText>{reviewObj.reviewText}</ReviewText>
          </ContainerContent>
          <LikeIconsContainer>
            <SlLikeStyled />
            <NumberLikes>{reviewObj.likes}</NumberLikes>
            <SlDislikeStyled />
            <NumberLikes>{reviewObj.dislikes}</NumberLikes>
          </LikeIconsContainer>
        </ContainerReview>
      );

    default:
      return null;
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
  margin-top: 50px;
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

const UserPicture = styled.img`
  width: 50px;
  height: 40px;
  border-radius: 30%;
  margin: 0 auto;
  margin-top: 20px;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 70%;
  margin-left: 5px;
`;
const UserDetailsContainer = styled.div``;

const UserNumberReviewsContainer = styled.div`
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
  cursor: pointer;
  &:hover {
    color: rgb(0, 255, 0);
  }
  margin-right: 10px;
`;
const SlDislikeStyled = styled(SlDislike)`
  cursor: pointer;
  &:hover {
    color: red;
  }
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
