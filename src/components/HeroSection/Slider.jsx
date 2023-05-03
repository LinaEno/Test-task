import React from "react";
import Slider from "react-slick";

import { heroSlider } from "../../constants/heroSlider";
import SliderItem from "./SliderItem.";

const settings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 2,
  slidesToScroll: 1,
};

const HeroSlider = () => {
  return (
    <Slider {...settings}>
      {heroSlider.map((item) => (
        <SliderItem item={item} key={item.id} />
      ))}
    </Slider>
  );
};

export default HeroSlider;
