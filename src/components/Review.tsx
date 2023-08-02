import {FC} from "react";
import StarRating from "./StarRating";
import { IReview } from "../features/interfaces";
import { useEffect } from "react";
import { getUserById } from "../features/users/fetchUsers";
import { useState } from "react";
import { getcompanyById } from "../features/companies/fetchCompanies";
import { ICompany, IUser } from "../features/interfaces";
import styled from 'styled-components';
type ReviewProps = {
    reviewObj: IReview, 
}

const Review: FC<ReviewProps> = ({ reviewObj }) => {
  const [company, setCompany] = useState<ICompany | null>(null);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const fetchCompany = async () => {
      const fetchedCompany = await getcompanyById(reviewObj.companyId);
      setCompany(fetchedCompany);
    };
    
    if (!company) {
      fetchCompany();
    }

  },[company, reviewObj.companyId])

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await getUserById(reviewObj.userId);
      setUser(fetchedUser);
    };
    
    if (!user) {
      fetchUser();
    }

  },[user, reviewObj.userId])

  const date = new Date(reviewObj.date).toDateString();

  return (
    <ContainerReview>
      <UserPicture src={user?.profilePicture} />
      <ContainerContent>
        <h3>{company?.companyName}</h3>
        <StarRating rating={reviewObj.rating} />
        <SpanGrey>{user?.name}</SpanGrey> 
        <SpanGrey>{date}</SpanGrey>
        <Title>{reviewObj.reviewTitle}</Title>
        <p>{reviewObj.reviewText}</p>
      </ContainerContent>
      
    </ContainerReview>
  );
};

export default Review;

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

const Title = styled.span`
  
`;

const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserPicture = styled.img`
  width: 80px;
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 20px;
`;