import TourDescription from "./TourDescription";
import { TourContainer } from "./TourSection.styled";
import TourSrc from "./TourSrc";

const TourSection = () => {
  return (
    <TourContainer>
      <TourDescription />
      <TourSrc />
    </TourContainer>
  );
};

export default TourSection;
