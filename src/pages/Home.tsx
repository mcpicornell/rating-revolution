import Review from "../components/Review";
import {useEffect, useState} from "react";
import { fetchReviews } from "../features/reviews/fetchReviews";
import styled from "styled-components";

const Home = () => {
  // const reviewData = useAppSelector(getReviewData);
  const [reviewData, setReviewData] = useState<Review | null>(null);
  let reviewStatus = "idle";

  useEffect(() => {
    if (reviewStatus === "idle") {
      fetchReviews(setReviewData)
      reviewStatus = "fulfilled"
    }
  }, [reviewData, reviewStatus]);
  let content: JSX.Element[] = [];
  if (reviewData) {
    const reviewDataCopy = [...reviewData];
    // const reviewDataOrdered = reviewDataCopy.sort(
    //   (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    // );
    reviewDataCopy.forEach((reviewObj) => {
      if (reviewObj) {
        content.push(<Review key={reviewObj.id} reviewObj={reviewObj} />);
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
