import { ICompany } from "../features/interfaces";
import {FC} from "react";
import {BiCommentDetail} from "react-icons/bi"
import StarRating from "./StarRating";
import { getNumberElementsInArray, getRandomIndex } from "../features/functions";
import styled from "styled-components";
type CompanyProps = {
    companyObj: ICompany | undefined, 
}


const CompanyCard: FC<CompanyProps> = ({ companyObj }) => {
    return(
       <CardContainer>
            <CompanyPicture src={companyObj?.photos[getRandomIndex(companyObj?.photos)]}/>
            <CompanyName>{companyObj?.companyName}</CompanyName> 
            <StarRating rating={companyObj!.rating} />
            <ContainerInfoReviews>
                <CommentSvg />
                <CommentInfo>{getNumberElementsInArray(companyObj!.photos)}</CommentInfo>
            </ContainerInfoReviews>
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
    padding-top: 20px;
    padding-bottom: 10px;
    width: 90%;
    margin: 0 auto;
    cursor: pointer;
`;

const CompanyPicture = styled.img`
    border-radius: 12px;
    width: 80%;
`

const CompanyName = styled.span`
    margin-top: 20px;
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 18px;
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