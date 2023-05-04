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
      <div className="slider-wrapper">
        <div className="slider-bg">
          <img
            className="slider-img"
            src="/hero_background.jpg"
            alt="main background"
          />
        </div>
        <HeroSlider />
      </div>
    </HeroContainer>
  );
};

export default HeroSection;
