import styled from "styled-components";
import Slider from "react-slick";

export const ReviewContainer = styled.section`
  position: relative;
  padding-left: 40px;
  margin-bottom: 160px;
`;

export const ReviewPreTitle = styled.p`
  position: relative;
  font-weight: 500;
  font-size: 14px;
  line-height: calc(18 / 14);
  text-transform: capitalize;
  text-align: center;
  color: #f59e0b;
  margin-bottom: 12px;
  &::before {
    content: "";
    display: block;
    width: 32px;
    height: 1px;
    background-color: #f59e0b;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: -8px;
  }
`;

export const ReviewTitle = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: calc(40 / 32);
  text-transform: capitalize;
  color: #1b1c57;
  text-align: center;
  margin-bottom: 40px;
`;

export const ReviewSectionSlider = styled(Slider)`
  .slick-list {
    left: -120px;
    width: 1440px;
    overflow: hidden;
  }

  .slick-slide {
    opacity: 1;
    transition: opacity 0.3s;
  }

  .slick-slide.slick-center {
    margin-left: 56px;
    margin-right: 56px;
  }
  .slick-slide.slick-active {
    width: 740px !important;
  }
  .slick-slide:not(.slick-active) {
    opacity: 0;
  }

  .slick-slide
    + .slick-slide.slick-active:not(
      .slick-slide.slick-center + .slick-slide.slick-active
    ):not(.slick-center) {
    margin-left: -620px;
  }

  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }

  .slick-dots {
    position: absolute;
    bottom: -32px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
  }

  .slick-dots li {
    position: relative;
    display: inline-block;
    width: 8px;
    height: 8px;
    margin: 0 8px;
    padding: 0;
    cursor: pointer;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;
    display: block;
    width: 8px;
    height: 8px;
    padding: 5px;
    cursor: pointer;

    color: transparent;
    border-radius: 50%;
    outline: none;
    background: #e0e3eb;
  }

  .slick-dots li button:hover,
  .slick-dots li button:focus {
    outline: none;
  }

  .slick-dots li button:hover::before,
  .slick-dots li button:focus::before {
    opacity: 1;
  }

  .slick-dots li button::before {
    font-family: "slick";
    font-size: 6px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;

    content: "•";
    text-align: center;

    opacity: 0.25;
    color: black;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  li.slick-active button {
    background: #3c4563;
  }
`;

export const Review = styled.div`
  position: relative;
  min-height: 505px;
  width: 740px;
`;

export const ReviewImgBox = styled.div`
  width: 740px;
`;

export const ReviewTextBox = styled.div`
  position: absolute;
  z-index: 200;
  padding: 32px;
  background-color: #fff;
  width: 612px;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%);
  box-shadow: 0px 9px 32px rgba(89, 92, 219, 0.05);
  border-radius: 16px;
`;

export const ReviewTitleText = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: calc(25 / 20);
  text-transform: capitalize;
  color: #1b1c57;
  margin-bottom: 16px;
`;

export const ReviewDescText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: calc(24 / 14);
  color: #626687;
  opacity: 0.75;
  margin-bottom: 24px;
`;

export const ReviewPersonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const ReviewPersonName = styled.div`
  margin: 0 24px;
  width: 388px;
`;

export const PersonName = styled.polyline`
  font-weight: 500;
  font-size: 14px;
  line-height: calc(22 / 14);
  color: #0e1735;
`;
export const PersonDesc = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: calc(22 / 14);
  color: #888b97;
`;

export const ReviewRate = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 16px;
`;

export const RateSpan = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: calc(28 / 20);
  color: #3c4563;
`;
