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
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "0px",
      },
    },
  ],
};

const ReviewSection = () => {
  return (
    <ReviewContainer>
      <ReviewPreTitle>See Our Review</ReviewPreTitle>
      <ReviewTitle>What Our User Say About Us</ReviewTitle>
      <ReviewSectionSlider {...settings}>
        {reviews.map((review) => (
          <ReviewSlider key={review.id} review={review} />
        ))}
      </ReviewSectionSlider>
    </ReviewContainer>
  );
};

export default ReviewSection;
