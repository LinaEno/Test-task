import Slider from "react-slick";

import { reviews } from "../../constants/review";
import ReviewSlider from "./ReviewSlider";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ReviewSection = () => {
  return (
    <section>
      <p>See Our Review</p>
      <h2>What Our User Say About Us</h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <ReviewSlider key={review.id} review={review} />
        ))}
      </Slider>
    </section>
  );
};

export default ReviewSection;
