import {FC} from "react";
import StarRating from "./StarRating";
import { IReview } from "../features/interfaces";

type ReviewProps = {
    review: IReview, 
}

const Review: FC<ReviewProps> = ({ review }) => {
  return (
    <div>
      <h3>{review.userId}</h3>
      <StarRating rating={review.rate} />
      <p>{review.reviewText}</p>
    </div>
  );
};

export default Review;