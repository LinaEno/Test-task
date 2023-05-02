import React from "react";

import Search from "./Search";
import Partnership from "./Partnership";
import HeroSlider from "./Slider";

const HeroSection = () => {
  return (
    <section>
      <h1>
        find the place to live <span>your dreams</span> easily here
      </h1>
      <p>
        Everything you need about finding your place to live will be here, where
        it will be easier for you
      </p>
      <Search />
      <Partnership />
      <HeroSlider />
    </section>
  );
};

export default HeroSection;
