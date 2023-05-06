import styled from "styled-components";
import Slider from "react-slick";

export const ReviewContainer = styled.section`
  position: relative;
  margin-bottom: 60px;
  @media screen and (min-width: 1200px) {
    padding-left: 40px;
    margin-bottom: 160px;
  }
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

  @media screen and (min-width: 1200px) {
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
  }
  @media screen and (min-width: 1920px) {
    font-size: 18px;
    line-height: calc(24 / 18);
  }
`;

export const ReviewTitle = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: calc(40 / 32);
  text-align: center;
  text-transform: capitalize;
  color: #1b1c57;
  width: 300px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    width: auto;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 40px;
    line-height: calc(50 / 40);
  }
`;

export const ReviewSectionSlider = styled(Slider)`
  .slick-list {
    overflow: hidden;

    @media screen and (min-width: 1200px) {
      left: -80px;
      width: 1200px;
    }
    @media screen and (min-width: 1440px) {
      left: -160px;
      width: 1440px;
    }
    @media screen and (min-width: 1920px) {
      left: -280px;
      width: 1920px;
    }
  }

  .slick-slide {
    opacity: 1;
    transition: opacity 0.3s;
  }

  .slick-slide.slick-center {
    margin: 0;
    @media screen and (min-width: 1200px) {
      margin-left: 56px;
      margin-right: 56px;
    }
  }
  .slick-slide.slick-active {
    width: 100vw !important;
    @media screen and (min-width: 768px) {
      width: 700px !important;
    }
    @media screen and (min-width: 1200px) {
      width: 740px !important;
    }
  }
  .slick-slide:not(.slick-active) {
    opacity: 0;
  }

  .slick-slide
    + .slick-slide.slick-active:not(
      .slick-slide.slick-center + .slick-slide.slick-active
    ):not(.slick-center) {
    margin-left: 0;
    @media screen and (min-width: 768px) {
      margin-left: -52px;
    }
    @media screen and (min-width: 1200px) {
      margin-left: -690px;
    }
    @media screen and (min-width: 1440px) {
      margin-left: -594px;
    }
    @media screen and (min-width: 1920px) {
      margin-left: -350px;
    }
  }

  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }

  .slick-dots {
    position: absolute;
    bottom: 0px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    @media screen and (min-width: 1200px) {
      bottom: -32px;
    }
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
  min-height: auto;
  width: 100vw;
  @media screen and (min-width: 1200px) {
    min-height: 505px;
    width: 740px;
  }
`;

export const ReviewImgBox = styled.div`
  width: 700px;
  @media screen and (min-width: 1200px) {
    width: 740px;
  }
`;

export const ReviewImg = styled.img`
  width: 700px;
  @media screen and (min-width: 1200px) {
    width: 740px;
  }
`;

export const ReviewTextBox = styled.div`
  position: relative;
  background-color: #fff;
  width: 95vw;
  padding: 12px;
  margin-bottom: 29px;
  box-shadow: 0px 9px 32px rgba(89, 92, 219, 0.05);
  border-radius: 16px;

  @media screen and (min-width: 480px) {
    width: 440px;
  }
  @media screen and (min-width: 768px) {
    width: 612px;
    padding: 32px;
    margin-top: -60px;
    margin-left: 44px;
  }
  @media screen and (min-width: 1200px) {
    position: absolute;
    z-index: 200;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%);
    box-shadow: 0px 9px 32px rgba(89, 92, 219, 0.05);
    border-radius: 16px;
    margin-top: 0;
    margin-left: 0;
  }
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
  margin: 0px 24px;
  width: 260px;

  @media screen and (min-width: 1200px) {
    margin: 0 24px;
    width: 388px;
  }
`;

export const PersonName = styled.p`
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
