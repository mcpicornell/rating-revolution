import Review from '../components/Review'
import { useEffect } from 'react';
import { getReviewData, getReviewError, getReviewStatus } from '../features/reviews/ReviewsSlice';
import { useAppSelector, useAppDispatch } from '../app/store';
import { fetchReviews } from '../features/reviews/fetchReviews';
import styled from 'styled-components'

const Reviews = () => {

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
    reviewDataOrdered.forEach((reviewObj) => {
      if(reviewObj){
        content.push(
          <>
            <Review key={reviewObj.id} reviewObj={reviewObj} />
          </>
        )
      }
    })
  }
    return (
      <ReviewsContainer>
        {content}
      </ReviewsContainer>
    );
}

const ReviewsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin: 0 auto;
`
export default Reviews;
  