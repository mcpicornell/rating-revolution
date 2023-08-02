import { FC } from "react";
import StarRating from "./StarRating";
import { IReview } from "../features/interfaces";
import { useEffect } from "react";
import { getUserById } from "../features/users/fetchUsers";
import { useState } from "react";
import { getcompanyById } from "../features/companies/fetchCompanies";
import { ICompany, IUser } from "../features/interfaces";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { getRandomIndex } from "../features/functions";

type ReviewProps = {
  reviewObj: IReview | undefined;
};

const Review: FC<ReviewProps> = ({ reviewObj }) => {
  const [company, setCompany] = useState<ICompany | null>(null);
  const [user, setUser] = useState<IUser | null>(null);
  const location = useLocation();
  const date = new Date(reviewObj!.date).toDateString();

  useEffect(() => {
    const fetchCompany = async () => {
      const fetchedCompany = await getcompanyById(reviewObj!.companyId);
      setCompany(fetchedCompany);
    };

    if (!company) {
      fetchCompany();
    }
  }, [company, reviewObj]);

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
        <ContainerHome>
          <CompanyPicture
            src={company?.photos[getRandomIndex(company?.photos)]}
          />
          <ContainerContent>
            <ContainerTopBottom>
              <CompanyName>{company?.companyName}</CompanyName>
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
    case "/reviews":
      return (
        <ContainerReview>
          <UserPicture src={user?.profilePicture} />
          <ContainerContent>
            <h3>{company?.companyName}</h3>
            <StarRating rating={reviewObj!.rating} />
            <SpanGrey>{user?.name}</SpanGrey>
            <SpanGrey>{date}</SpanGrey>
            <Title>{reviewObj!.reviewTitle}</Title>
            <p>{reviewObj!.reviewText}</p>
          </ContainerContent>
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
  grid-template-columns: 1fr 4fr;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
  background: rgba(255, 255, 255, 1);
  border-radius: 12px;
  width: 80%;
  margin-top: 50px;
  margin-left: 3%;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
`;

const SpanGrey = styled.span`
  color: rgba(130, 130, 130, 1);
`;

const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserPicture = styled.img`
  width: 80px;
  border-radius: 30%;
  margin: 0 auto;
  margin-top: 20px;
`;
