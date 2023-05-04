import Slider from "react-slick";
import styled from "styled-components";

export const SliderTourSection = styled(Slider)`
  width: 521px;

  .slider-tour {
    width: 108px;
  }
  .slick-slide {
    margin-top: auto;
  }
  .slick-active {
    width: 108px !important;
  }
  .slick-slide .slider-tour {
    margin-left: 12px;
  }
  .slick-slide .slider-tour-img {
    width: 96px;
    height: 80px;
    object-fit: cover;
  }
  .slick-current .slider-tour {
    margin-left: 0;
  }
  .slick-current,
  .slick-current .slider-tour-img {
    width: 296px !important;
    height: 168px;
  }
`;
