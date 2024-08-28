import {BiCommentDetail} from "react-icons/bi";
import StarRating from "./StarRating";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const CompanyCard = ({company}) => {
    const nav = useNavigate();

    const navToCompaniesDetailsOnClick = () => {
        if (company) {
            nav(`/hotels/${company.id}`);
        }
    };

    return (
        <CardContainer onClick={navToCompaniesDetailsOnClick}>
            <CompanyName>{company.name}</CompanyName>
            <CompanyPicture src={company.photos}/>
            <StarRating rating={company.rating}/>
            <ContainerBottom>
                <ContainerUsers>
                    <UserPicture
                        src={company.last_reviewer.avatar}
                        alt="user"
                    />
                </ContainerUsers>
                <ContainerInfoReviews>
                    <CommentSvg/>
                    <CommentInfo>
                        {company.reviews}
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
