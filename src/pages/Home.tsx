import Review from '../components/Review'
import { useEffect } from 'react';
import { getReviewData, getReviewError, getReviewStatus } from '../features/reviews/ReviewsSlice';
import { useAppSelector, useAppDispatch } from '../app/store';
import { fetchReviews } from '../features/reviews/fetchReviews';
import styled from 'styled-components'
const Home = () => {

  const reviewData = useAppSelector(getReviewData);
  const reviewStatus = useAppSelector(getReviewStatus);
  const reviewError = useAppSelector(getReviewError)
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(reviewStatus === "idle"){
      dispatch(fetchReviews())
    }
  },[reviewData, reviewStatus, reviewError, dispatch])
  let content: JSX.Element[] = [];
  if(reviewData){
    const reviewDataCopy = [...reviewData]
    const reviewDataOrdered = reviewDataCopy.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    reviewDataOrdered.forEach((element) => {
      if(element){
        const reviewObj = {
          reviewId: element.reviewId,
          reviewText: element.reviewText,
          companyId: element.companyId,
          rating: element.rating,
          userId: element.userId,
          reviewTitle: element.reviewTitle,
          date: element.date
        }
        content.push(
          <>
            <Review key={element.reviewId} reviewObj={reviewObj} />
          </>
        )
      }
    })
  }
  
    return (
      <>
      <ReviewsContainer>
        {content}
      </ReviewsContainer>
      </>
    );
}

const ReviewsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin: 0 auto;
`
export default Home;
  