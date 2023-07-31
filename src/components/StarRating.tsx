import {FC} from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

type StarRatingProps = {
    rating: number; 
  };

const StarRating: FC<StarRatingProps> = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} />);
  }
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key={fullStars} />);
  }
  while (stars.length < totalStars) {
    stars.push(<FaRegStar key={stars.length} />);
  }

  return <div>{stars}</div>;
};

export default StarRating;