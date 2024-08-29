import styled from "styled-components";
import Review from "./Review";
import { getNumberElementsInArray } from "../features/functions";
import StarRating from "./StarRating";

const UserProfile = ({ user }) => {
  if (user) {
    const { name, reviews, email, avatar, nickname, rating } = user;

    return (
      <PageContainer>
        <ProfileContainer>
          <ImgContainer>
            <ProfileImg src={avatar} alt="userImg" />
          </ImgContainer>
          <InfoContainer>
            <NamesContainer>
              <ElementsSpan>Name:</ElementsSpan>
              <ElementsSpan>Email:</ElementsSpan>
              <ElementsSpan>Nickname:</ElementsSpan>
              <ElementsSpan>Total Reviews:</ElementsSpan>
              <ElementsSpan>Average Rating:</ElementsSpan>
            </NamesContainer>

            <DetailsContainer>
              <DetailsSpan>{name}</DetailsSpan>
              <DetailsSpan>{email}</DetailsSpan>
              <DetailsSpan>{nickname}</DetailsSpan>
              <DetailsSpan>{reviews.length}</DetailsSpan>
              <StarRating rating={Number(rating)}/>
            </DetailsContainer>
          </InfoContainer>
        </ProfileContainer>

        <div>
          {reviews.map((reviewObj) => (
            <Review key={reviewObj.id} reviewObj={reviewObj} />
          ))}
        </div>
      </PageContainer>
    );
  }
  return <></>;
};
export default UserProfile;

const PageContainer = styled.div`
    
`;

const ProfileContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`;
const ImgContainer = styled.div`
    
`;
const ProfileImg = styled.img`
    border-radius: 24px;
`;
const InfoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;
const NamesContainer = styled.div`
display: flex;
flex-direction: column;
    
`;
const DetailsContainer = styled.div`
    display: flex;
flex-direction: column;
margin-left: 30px;
`;
const ElementsSpan = styled.span`
    
`;

const DetailsSpan = styled.span`
    
`;