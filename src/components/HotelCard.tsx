import { getUserById } from "../features/users/fetchUsers";
import { ICompany, IReview, IUser } from "../features/interfaces";
import {FC, useEffect, useState} from "react";
import {BiCommentDetail} from "react-icons/bi"
import StarRating from "./StarRating";
import { getNumberElementsInArray, getRandomIndex } from "../features/functions";
import styled from "styled-components";


type CompanyProps = {
    companyObj: ICompany | undefined, 
}

const CompanyCard: FC<CompanyProps> = ({ companyObj }) => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [usersFetched, setUsersFetched] = useState(false);
    const reviewsArrCopy = [...companyObj!.reviews]
    
    const getLastThreeReviews = (arrayReviews: IReview[]) => {
        const lastReviews = arrayReviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        let lastThreeReviews = [] as IReview[];
        for(let i=0; i < 3; i++) {
            if(lastReviews.length<=i){
                break;
            }
            else{
                lastThreeReviews.push(lastReviews[i])
            } 
        }
        return lastThreeReviews
    }
    const reviews = getLastThreeReviews(reviewsArrCopy)
    useEffect(() => {
        
        const fetchUser = async (id: string) => {
            const fetchedUser = await getUserById(id);
            if (fetchedUser) {
                setUsers([...users, fetchedUser]);
            }
        };
    
        if (users.length === 0 && usersFetched === false) {
            const fetchAllUsers = async () => {
                reviews.forEach(review => {
                    fetchUser(review.userId);
                });
                setUsersFetched(true)
            }
            fetchAllUsers();
            
        }
      }, [reviews, users, usersFetched]);

      let userPicture: JSX.Element[] = [];
      console.log(users)
      users.forEach((user) => {
        const profilePictureObj =  {
            userId: user.userId,
            profilePicture: user.profilePicture
        }
        userPicture.push(
            <UserPicture src={profilePictureObj.profilePicture} alt="user"/>
        )
      })
    return(
       <CardContainer>
        <CompanyName>{companyObj?.companyName}</CompanyName> 
            <CompanyPicture src={companyObj?.photos[getRandomIndex(companyObj?.photos)]}/>
            <StarRating rating={companyObj!.rating} />
            <ContainerBottom>
                <ContainerUsers>
                    {userPicture}
                </ContainerUsers>
                <ContainerInfoReviews>
                    <CommentSvg />
                    <CommentInfo>{getNumberElementsInArray(companyObj!.photos)}</CommentInfo>
                </ContainerInfoReviews>
            </ContainerBottom>
        </CardContainer>
    )
}
export default CompanyCard;

const CardContainer = styled.div`
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
    cursor: pointer;
`;

const CompanyPicture = styled.img`
    border-radius: 12px;
    width: 90%;
    margin-bottom: 25px;
`

const CompanyName = styled.span`
    margin-bottom: 25px;
    font-weight: 600;
    font-size: 18px;
`
const ContainerUsers = styled.div`
    
`
const ContainerInfoReviews = styled.div`
display: flex;
flex-direction: row;
align-items: center;
position: relative;
margin-top: 10px;
`

const CommentSvg = styled(BiCommentDetail)`
    color: rgba(130, 130, 130, 1);
    margin-right: 5px;
`
const CommentInfo = styled.span`
    color: rgba(130, 130, 130, 1);
`

const UserPicture = styled.img`
  width: 40px;
  border-radius: 30%;
  margin: 0px 5px 0px 5px;
`;

const ContainerBottom = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-top: 20px;
`