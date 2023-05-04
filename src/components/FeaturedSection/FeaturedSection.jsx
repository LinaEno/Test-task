import React from "react";
import FeaturedList from "./FeaturedList";
import {
  FeaturedContainer,
  FeaturedPreTitle,
  FeaturedTitle,
} from "./FeaturedSection.styled";

const FeaturedSection = () => {
  return (
    <FeaturedContainer>
      <FeaturedPreTitle>Our Recommendation</FeaturedPreTitle>
      <FeaturedList />
    </FeaturedContainer>
  );
};

export default FeaturedSection;
