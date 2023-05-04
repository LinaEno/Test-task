import Search from "./Search";
import Partnership from "./Partnership";
import HeroSlider from "./Slider";

import {
  HeroBox,
  HeroContainer,
  HeroText,
  HeroTitle,
  HeroTitleSpan,
} from "./HeroSection.styled";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBox>
        <HeroTitle>
          find the place to live <HeroTitleSpan>your dreams</HeroTitleSpan>{" "}
          easily here
        </HeroTitle>
        <HeroText>
          Everything you need about finding your place to live will be here,
          where it will be easier for you
        </HeroText>
        <Search />
        <Partnership />
      </HeroBox>
      <HeroSlider />
    </HeroContainer>
  );
};

export default HeroSection;
