import Review from "../components/Review";
import {useEffect, useState} from "react";
import {fetchReviews} from "../features/reviews/fetchReviews";
import styled from "styled-components";

const Home = () => {

    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        if (!reviews) {
            fetchReviews(setReviews)
        }
    }, [reviews]);

    let content = [];
    if (reviews) {
        const reviewDataCopy = [...reviews];

        reviewDataCopy.forEach((review) => {
            if (review) {
                content.push(<Review key={review.id} review={review}/>);
            }
        });
    }

    return (
        <>
            <ReviewsContainer key="reviewsContainer">{content}</ReviewsContainer>
        </>
    );
};

const ReviewsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    margin: 0 auto;
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;
export default Home;
