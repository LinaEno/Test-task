import React from "react";

import Search from "./Search";
import Partnership from "./Partnership";
import HeroSlider from "./Slider";

import {
  HeroContainer,
  HeroText,
  HeroTitle,
  HeroTitleSpan,
} from "./HeroSection.styled";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroTitle>
        find the place to live <HeroTitleSpan>your dreams</HeroTitleSpan> easily
        here
      </HeroTitle>
      <HeroText>
        Everything you need about finding your place to live will be here, where
        it will be easier for you
      </HeroText>
      <Search />
      <Partnership />
      <HeroSlider />
    </HeroContainer>
  );
};

export default HeroSection;
