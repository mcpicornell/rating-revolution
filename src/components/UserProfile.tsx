import { IReview, IUser } from "../features/interfaces";
import styled from "styled-components";
import Review from "./Review";
import { getNumberElementsInArray } from "../features/functions";
import StarRating from "./StarRating";
type PropsUserProfile = {
  userObj?: IUser;
};

const UserProfile = ({ userObj }: PropsUserProfile) => {
  if (userObj) {
    const { userId, name, reviews, email, profilePicture, nickName } = userObj;

    const reviewOrdered = reviews.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const numberTotalReviews = getNumberElementsInArray(reviews)

    const getAverageRating = (reviews: IReview[]) => {
        let amount = 0;
        reviews.forEach(element => {
            amount = amount + Number(element.rating);
        });
        const averageRating = amount / reviews.length;
        return averageRating
    }
    const averageRating = getAverageRating(reviews);
    return (
      <PageContainer>
        <ProfileContainer>
          <ImgContainer>
            <ProfileImg src={profilePicture} alt="userImg" />
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
              <DetailsSpan>{nickName}</DetailsSpan>
              <DetailsSpan>{numberTotalReviews}</DetailsSpan>
              <StarRating rating={averageRating}/>
            </DetailsContainer>
          </InfoContainer>
        </ProfileContainer>

        <div>
          {reviewOrdered.map((reviewObj) => (
            <Review key={reviewObj.reviewId} reviewObj={reviewObj} />
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