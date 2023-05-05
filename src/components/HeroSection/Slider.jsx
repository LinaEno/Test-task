import React from "react";
import Slider from "react-slick";

import { heroSlider } from "../../constants/heroSlider";
import SliderItem from "./SliderItem";

const settings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

const HeroSlider = () => {
  return (
    <Slider {...settings} className="hero-slider">
      {heroSlider.map((item) => (
        <SliderItem item={item} key={item.id} />
      ))}
    </Slider>
  );
};

export default HeroSlider;
