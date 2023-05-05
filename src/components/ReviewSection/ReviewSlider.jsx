import Star from "../../images/star.svg";
import {
  PersonDesc,
  PersonName,
  RateSpan,
  Review,
  ReviewDescText,
  ReviewImgBox,
  ReviewPersonBox,
  ReviewPersonName,
  ReviewRate,
  ReviewTextBox,
  ReviewTitleText,
} from "./ReviewSection.styled";

const ReviewSlider = ({ review }) => {
  return (
    <Review>
      <ReviewImgBox className="slider-review">
        <img
          src={review.image}
          alt="House foto"
          className="slider-review-img"
          width={740}
          height={400}
          style={{ opacity: "0.7", borderRadius: "8px" }}
        />
      </ReviewImgBox>
      <ReviewTextBox>
        <ReviewTitleText>{review.title}</ReviewTitleText>
        <ReviewDescText>{review.desc}</ReviewDescText>
        <ReviewPersonBox>
          <div>
            <img
              src={review.person.foto}
              alt="Person foto"
              width={40}
              height={40}
            />
          </div>
          <ReviewPersonName>
            <PersonName>{review.person.fullName}</PersonName>
            <PersonDesc>{review.person.desc}</PersonDesc>
          </ReviewPersonName>
          <ReviewRate>
            <img src={Star} alt="Rate star" />
            <RateSpan>{review.person.rate}</RateSpan>
          </ReviewRate>
        </ReviewPersonBox>
      </ReviewTextBox>
    </Review>
  );
};

export default ReviewSlider;
