import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import styled from "styled-components";


const StarRating = ({ rating }) => {
  const ratingNumber = Number(rating)
  const totalStars = 5;
  const fullStars = Math.floor(ratingNumber);
  const hasHalfStar = rating % 1 !== 0;

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FilledStar key={i} />);
  }
  if (hasHalfStar) {
    stars.push(<HalfFilledStar key={fullStars} />);
  }
  while (stars.length < totalStars) {
    stars.push(<EmptyStar key={stars.length} />);
  }

  return <div>{stars}</div>;
};

export default StarRating;

const FilledStar = styled(FaStar)`
  color: rgba(47, 128, 237, 1);
`;

const EmptyStar = styled(FaRegStar)`
  color: rgba(130, 130, 130, 1);
`;

const HalfFilledStar = styled(FaStarHalfAlt)`
color: rgba(47, 128, 237, 1);
`;