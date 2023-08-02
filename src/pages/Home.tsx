import Review from '../components/Review'
import { useEffect } from 'react';
import { getReviewData, getReviewError, getReviewStatus } from '../features/companies/ComapaniesSlice';
import { useAppSelector, useAppDispatch } from '../app/store';
import { fetchReviews } from '../features/companies/fetchCompanies';
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
  