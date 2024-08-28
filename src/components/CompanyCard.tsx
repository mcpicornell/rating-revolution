import { getUserById } from "../features/users/fetchUsers";
import { ICompany, IReview, IUser } from "../features/interfaces";
import { FC, useEffect, useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import StarRating from "./StarRating";
import { getNumberElementsInArray } from "../features/functions";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

type CompanyProps = {
  companyObj: ICompany;
};

const CompanyCard: FC<CompanyProps> = ({ companyObj }) => {
  const nav = useNavigate();
  const [users, setUsers] = useState<IUser[]>([]);
  const reviewsArrCopy = [...companyObj!.reviews];

  const getLastThreeReviews = (arrayReviews: IReview[]) => {
    const lastReviews = arrayReviews.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    return lastReviews.slice(0, 3);
  };
  const reviews = getLastThreeReviews(reviewsArrCopy);

  const navToCompaniesDetailsOnClick = () => {
    if (companyObj) {
      nav(`/hotels/${companyObj?.id}`, { state: companyObj });
    }
  };

  useEffect(() => {
    const fetchAllUsers = async () => {
      const uniqueUserIds: { [key: string]: boolean } = {};
      for (let i = 0; i < reviews.length; i++) {
        uniqueUserIds[reviews[i].id] = true;
      }

      const fetchUsers = async () => {
        const fetchUser = async (id: string) => {
          const fetchedUser = await getUserById(id);
          if (fetchedUser) {
            return fetchedUser;
          }
          return null;
        };

        const usersArray: IUser[] = [];
        for (const userId in uniqueUserIds) {
          if (uniqueUserIds.hasOwnProperty(userId)) {
            const user = await fetchUser(userId);
            if (user) {
              usersArray.push(user);
            }
          }
        }
        setUsers(usersArray);
      };

      fetchUsers();
    };
    fetchAllUsers();
  }, [reviews]);

  let userPicture: JSX.Element[] = [];

  users.forEach((user) => {
    const profilePictureObj = {
      id: user.id,
      avatar: user.avatar,
    };
    userPicture.push(
      <UserPicture
        key={profilePictureObj.id}
        src={profilePictureObj.avatar}
        alt="user"
      />
    );
  });
  return (
    <CardContainer onClick={navToCompaniesDetailsOnClick}>
      <CompanyName>{companyObj?.name}</CompanyName>
      <CompanyPicture src={companyObj?.photos[0]} />
      <StarRating rating={companyObj!.rating} />
      <ContainerBottom>
        <ContainerUsers>{userPicture}</ContainerUsers>
        <ContainerInfoReviews>
          <CommentSvg />
          <CommentInfo>
            {reviews}
          </CommentInfo>
        </ContainerInfoReviews>
      </ContainerBottom>
    </CardContainer>
  );
};
export default CompanyCard;

const CardContainer = styled.div`
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
  background: rgba(255, 255, 255, 1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 10px;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 30px;
  cursor: pointer;
`;

const CompanyPicture = styled.img`
  border-radius: 12px;
  width: 90%;
  margin-bottom: 25px;
`;

const CompanyName = styled.span`
  margin-bottom: 25px;
  font-weight: 600;
  font-size: 18px;
`;
const ContainerUsers = styled.div``;
const ContainerInfoReviews = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const CommentSvg = styled(BiCommentDetail)`
  color: rgba(130, 130, 130, 1);
  margin-right: 5px;
`;
const CommentInfo = styled.span`
  color: rgba(130, 130, 130, 1);
`;

const UserPicture = styled.img`
  width: 30px;
  height: 25px;
  border-radius: 30%;
  margin: 0px 5px 0px 5px;
`;

const ContainerBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 20px;
`;
