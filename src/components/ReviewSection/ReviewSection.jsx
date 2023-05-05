import Slider from "react-slick";

import { reviews } from "../../constants/review";
import ReviewSlider from "./ReviewSlider";
import {
  ReviewContainer,
  ReviewPreTitle,
  ReviewSectionSlider,
  ReviewTitle,
} from "./ReviewSection.styled";

const settings = {
  dots: true,
  slidesToShow: 3,
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "56px",
  arrows: false,
  initialSlide: 0,
};

const ReviewSection = () => {
  return (
    <ReviewContainer>
      <ReviewPreTitle>See Our Review</ReviewPreTitle>
      <ReviewTitle>What Our User Say About Us</ReviewTitle>
      {/* <div className="slider-container"> */}
      <ReviewSectionSlider {...settings}>
        {reviews.map((review) => (
          <ReviewSlider key={review.id} review={review} />
        ))}
      </ReviewSectionSlider>
      {/* </div> */}
    </ReviewContainer>
  );
};

export default ReviewSection;
