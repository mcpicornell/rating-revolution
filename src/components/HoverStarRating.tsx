import React, { FC, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import styled from "styled-components";

type HoverStarRatingProps = {
  onChangeRating: (rating: number) => void;
};

const HoverStarRating: FC<HoverStarRatingProps> = ({ onChangeRating }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleStarHover = (rating: number) => {
    setHoverRating(rating);
  };

  const handleStarLeave = () => {
    setHoverRating(selectedRating);
  };

  const handleStarClick = (rating: number) => {
    setSelectedRating(rating);
    onChangeRating(rating);
  };

  const totalStars = 5;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    const isFilled = i <= hoverRating || i <= selectedRating;
    const isHalfFilled = (hoverRating >= i - 0.5 && hoverRating < i) || (selectedRating >= i - 0.5 && selectedRating < i);

    if (isFilled) {
      stars.push(
        <FilledStar
          key={i}
          onMouseEnter={() => handleStarHover(i)}
          onMouseLeave={handleStarLeave}
          onClick={() => handleStarClick(i)}
        />
      );
    } else if (isHalfFilled) {
      stars.push(
        <HalfFilledStar
          key={i}
          onMouseEnter={() => handleStarHover(i - 0.5)}
          onMouseLeave={handleStarLeave}
          onClick={() => handleStarClick(i - 0.5)}
        />
      );
    } else {
      stars.push(
        <EmptyStar
          key={i}
          onMouseEnter={() => handleStarHover(i)}
          onMouseLeave={handleStarLeave}
          onClick={() => handleStarClick(i)}
        />
      );
    }
  }

  return <div>{stars}</div>;
};

export default HoverStarRating;

const FilledStar = styled(FaStar)`
  color: rgba(47, 128, 237, 1);
  cursor: pointer;
`;

const EmptyStar = styled(FaRegStar)`
  color: rgba(130, 130, 130, 1);
  cursor: pointer;
`;

const HalfFilledStar = styled(FaStarHalfAlt)`
  color: rgba(47, 128, 237, 1);
  cursor: pointer;
`;