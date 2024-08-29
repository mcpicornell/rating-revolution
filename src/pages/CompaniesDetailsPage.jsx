import styled from "styled-components";
import {useParams} from "react-router-dom";
import "swiper/css";
import Slider from "../components/Slider";
import StarRating from "../components/StarRating";
import {
    addSpacesToPhoneNumber,
    checkIfSingular,
    getNumberElementsInArray,
    isLoggedUserOrCompany
} from "../features/functions";
import Review from "../components/Review";
import {MdLocationOn} from "react-icons/md";
import {BsFillTelephoneFill} from "react-icons/bs";
import {HiMail} from "react-icons/hi";
import {AiOutlineUser} from "react-icons/ai";
import HoverStarRating from "../components/HoverStarRating";
import {ButtonLogin} from "./LoginUserPage";
import {useEffect, useState} from "react";
import {fetchCompanyById} from "../features/companies/fetchCompanies";
import {Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CompaniesDetailsPage = () => {
    const {id} = useParams();
    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);
    const [rating, setRating] = useState(0);


    useEffect(() => {
        if (!company) {
            setLoading(true);
            fetchCompanyById(id, setCompany)
        }
        if (loading && company) {
            setLoading(false);
        }
    }, [company, loading]);
    if (company && !loading) {
        const isLogged = isLoggedUserOrCompany("company");

        const handleRatingChange = (newRating) => {
            setRating(newRating);
        };

        // const numberReviewsByRating = (number) => {
        //     let numberReviews = 0;
        //     for (let i = 0; i < company.reviews.length; i++) {
        //         if (company.reviews[i].rating === number) {
        //             numberReviews++;
        //         }
        //     }
        //     return numberReviews;
        // };

        const numberReviews = getNumberElementsInArray(company.reviews);
        const reviewString = checkIfSingular(
            getNumberElementsInArray(company.reviews)
        );

        let reviews = [];
        let cardRating = [];

        if (company.reviews) {
            const reviewData = [...company.reviews];
            // const reviewDataOrdered = reviewData.sort(
            //     (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            // );
            reviewData.forEach((review) => {
                if (review) {
                    reviews.push(<Review key={review.id} review={review}/>);
                }
            });
            for (let i = 5; i > 0; i--) {
                cardRating.push(
                    <CardStarRating>
                        <StarRating rating={i}/>
                        <ReviewSpan>
                            {company.total_reviews}{" "}
                            {checkIfSingular(company.total_reviews)}
                        </ReviewSpan>
                    </CardStarRating>
                );
            }
        }


        return (
            <PageContainer>
                <HeaderContainer>
                    <Header>
                        <Title>{company.name}</Title>
                        <StarInfoContainer>
                            <StarRating rating={company.rating}/>
                            <ReviewSpan>
                                {numberReviews} {reviewString}
                            </ReviewSpan>
                        </StarInfoContainer>
                    </Header>
                    <SubHeader>
                        <SubHeaderElementContainer>
                            <MdLocationOnStyled/>
                            <SpanGrey>{company.address}</SpanGrey>
                        </SubHeaderElementContainer>
                        <SubHeaderElementContainer>
                            <BsFillTelephoneFillStyled/>
                            <SpanGrey>{addSpacesToPhoneNumber(company.phone)}</SpanGrey>
                        </SubHeaderElementContainer>
                        <SubHeaderElementContainer>
                            <HiMailStyled/>
                            <SpanGrey>{company.email}</SpanGrey>
                        </SubHeaderElementContainer>
                    </SubHeader>
                </HeaderContainer>
                <SliderContainer>
                    <Slider company={company}/>
                </SliderContainer>
                <CardsContainer>
                    <CardReviewContainer>{cardRating}</CardReviewContainer>
                    <CardInfoContainer>
                        <SpanCardTitle>{company.name}</SpanCardTitle>
                        <SpanCardDescription>{company.description}</SpanCardDescription>
                        <CardInfoContactContainer>
                            <ContactContainer>
                                <HiMail/>
                                <SpanGreyStyled>{company.email}</SpanGreyStyled>
                            </ContactContainer>
                            <ContactContainer>
                                <BsFillTelephoneFill/>
                                <SpanGreyStyled>{addSpacesToPhoneNumber(company.phone)}</SpanGreyStyled>
                            </ContactContainer>
                            <ContactContainer>
                                <MdLocationOn/>
                                <SpanGreyStyled>{company.address}</SpanGreyStyled>
                            </ContactContainer>
                        </CardInfoContactContainer>
                    </CardInfoContainer>
                </CardsContainer>
                <CommentsContainer>
                    <MainCommentContainer isLogged={isLogged}>
                        <CommentAndStarsContainer>
                            <AiOutlineUserStyled/>
                            <HoverStarRating onChangeRating={handleRatingChange}/>
                        </CommentAndStarsContainer>
                        <CommentInput placeholder="Write a review..."/>
                        <ButtonComment>Comment</ButtonComment>
                    </MainCommentContainer>
                    {reviews}
                </CommentsContainer>
            </PageContainer>
        );
    } else {
        return (
            <PageContainer>
                <div className="spinner-container">
                    <Spinner animation="border" variant="primary"/>
                </div>
            </PageContainer>

        )
    }


};
export default CompaniesDetailsPage;

const PageContainer = styled.div`
    margin: 0 auto;
    margin-top: 1px;
    width: 100%;
    border-radius: 24px;
    margin-bottom: 20px;
`;

const SliderContainer = styled.div`
    margin: 0 auto;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 900px;
`;

const HeaderContainer = styled.div`
    background: rgba(255, 255, 255, 1);
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.05);
    padding-bottom: 15px;
    margin-bottom: 10px;
`;

const Header = styled.div`
    width: 80%;
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    text-align: center;
    margin-bottom: 10px;
`;

const SubHeader = styled.div`
    width: 65%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
`;

const SubHeaderElementContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HiMailStyled = styled(HiMail)`
    margin-right: 10px;
    color: rgba(130, 130, 130, 1);
`;

const BsFillTelephoneFillStyled = styled(BsFillTelephoneFill)`
    margin-right: 10px;
    color: rgba(130, 130, 130, 1);
`;

const MdLocationOnStyled = styled(MdLocationOn)`
    margin-right: 10px;
    color: rgba(130, 130, 130, 1);
`;

const Title = styled.h3``;

const StarInfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CardStarRating = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 70%;
    margin: 5px;
`;

const SpanGrey = styled.span`
    font-style: italic;
    color: rgba(130, 130, 130, 1);
    font-size: 12px;
`;

const ReviewSpan = styled.span`
    margin-left: 10px;
    font-size: 14px;
`;
const CardsContainer = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 70%;
`;

const CardReviewContainer = styled.div`
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
    background: rgba(255, 255, 255, 1);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 10px;
    width: 300px;
    margin: 0 auto;
`;

const CardInfoContainer = styled.div`
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
    background: rgba(255, 255, 255, 1);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    padding-right: 5px;
    width: 300px;
    margin: 0 auto;
    padding-left: 20px;
    padding-top: 20px;
`;

const SpanCardTitle = styled.span`
    font-size: 16px;
    font-weight: 600;
`;

const SpanCardDescription = styled.span`
    font-size: 12px;
    margin-top: 15px;
`;

const SpanGreyStyled = styled(SpanGrey)`
    font-size: 12px;
    color: black;
    margin-left: 10px;
`;

const CardInfoContactContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContactContainer = styled.div`
    display: flex;
    margin-top: 15px;
`;

const CommentsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const MainCommentContainer = styled.div`
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(224, 224, 224, 1);
    border-radius: 12px;
    margin: 0 auto;
    width: 60%;
    padding: 20px 20px 20px 20px;
    position: ${props => props.isLogged ? "absolute" : "relative"};
    height: 16vh;
    visibility: ${props => props.isLogged ? "hidden" : "visible"};
`;

const CommentAndStarsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(224, 224, 224, 1);
`;

const AiOutlineUserStyled = styled(AiOutlineUser)`
    color: rgba(130, 130, 130, 1);
    position: relative;
    width: 30px;
    height: 20px;
    bottom: 2px;
    margin-right: 50px;
    margin-left: 10px;
`;

const CommentInput = styled.textarea`
    margin-top: 5px;
    border: none;
    margin-left: 10px;
    resize: none;
    width: 98%;
    cursor: text;
    height: 60px;
`;

const ButtonComment = styled(ButtonLogin)`
    width: 100px;
    position: absolute;
    right: 30px;
    bottom: 10px;
`;
