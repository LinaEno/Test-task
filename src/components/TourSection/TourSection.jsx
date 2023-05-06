import TourDescription from "./TourDescription";
import TourSrc from "./TourSrc";

import bg from "../../images/bg/blur2.svg";

import { BgImage, TourContainer } from "./TourSection.styled";

const TourSection = () => {
  return (
    <TourContainer>
      <BgImage src={bg} all="bg image" />
      <TourDescription />
      <TourSrc />
    </TourContainer>
  );
};

export default TourSection;
