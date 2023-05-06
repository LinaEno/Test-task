import FeaturedList from "./FeaturedList";
import { FeaturedContainer, FeaturedPreTitle } from "./FeaturedSection.styled";

const FeaturedSection = () => {
  return (
    <FeaturedContainer>
      <FeaturedPreTitle>Our Recommendation</FeaturedPreTitle>
      <FeaturedList />
    </FeaturedContainer>
  );
};

export default FeaturedSection;
