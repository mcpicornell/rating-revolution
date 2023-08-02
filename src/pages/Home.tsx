import Review from '../components/Review'
import { useEffect } from 'react';
import { getReviewData, getReviewError, getReviewStatus } from '../features/reviews/ReviewsSlice';
import { useAppSelector, useAppDispatch } from '../app/store';
import { fetchReviews } from '../features/reviews/fetchReviews';
const Index = () => {

  const reviewData = useAppSelector(getReviewData);
  const reviewStatus = useAppSelector(getReviewStatus);
  const reviewError = useAppSelector(getReviewError)
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(reviewStatus === "idle"){
      dispatch(fetchReviews())
    }
  },[reviewData, reviewStatus, reviewError, dispatch])
  console.log(reviewData)
    return (
      <>
        
      </>
    );
  };
export default Index;
  