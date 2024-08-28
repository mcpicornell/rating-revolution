import Review from '../components/Review'
import {useEffect, useState} from 'react';
import { fetchReviews } from '../features/reviews/fetchReviews';
import styled from 'styled-components'

const Reviews = () => {
  const [reviews, setReviews] = useState([])


  useEffect(() => {
    if(!reviews){
      setReviews(fetchReviews())
    }
  },[reviews])
  let content = [];
  if(reviews){
    const reviewDataCopy = [...reviews]
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
  