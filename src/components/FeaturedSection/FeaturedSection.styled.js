import styled from "styled-components";
import Slider from "react-slick";

export const FeaturedContainer = styled.section`
  position: relative;
  margin-bottom: 60px;

  @media screen and (min-width: 1440px) {
    padding-left: 40px;
    margin-bottom: 120px;
  }
`;

export const FeaturedPreTitle = styled.p`
  position: relative;
  font-weight: 500;
  font-size: 14px;
  line-height: calc(18 / 14);
  text-transform: capitalize;
  color: #f59e0b;
  margin-bottom: 12px;

  @media screen and (min-width: 1440px) {
    &::before {
      content: "";
      display: inline-block;
      width: 32px;
      height: 1px;
      background-color: #f59e0b;
      position: absolute;
      left: -40px;
      top: 9px;
    }
  }
`;

export const FeaturedTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: calc(28 / 24);
  text-transform: capitalize;
  color: #1b1c57;
  margin-bottom: 12px;

  @media screen and (min-width: 1440px) {
    font-size: 32px;
    line-height: calc(40 / 32);
  }
`;

export const FeaturedTitleBox = styled.div`
  display: block;
  margin-bottom: 40px;

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: flex-end;
    justify-content: start;
    gap: 136px;
    margin-bottom: 40px;
  }
`;

export const FeaturedListBtn = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  gap: 8px;
  font-family: inherit;
  font-weight: 500;
  font-size: 18px;
  line-height: calc(28 / 18);
  color: #888b97;
  fill: #888b97;
  padding: 12px 24px;
  border: 1px solid #e0e3eb;
  border-radius: 32px;
  transition: all 0.25s ease-in-out;

  &:hover,
  &:focus {
    color: #10b981;
    fill: #10b981;
    background-color: #d1fae5;
    border-color: #d1fae5;
  }
`;

export const FeaturedImage = styled.img`
  width: 95vw;
  object-fit: cover;
  border-radius: 24px;
  height: 382px;
  @media screen and (min-width: 1440px) {
    width: 340px;
  }
`;

export const FeaturedSliderItem = styled.div`
  position: relative;
`;

export const FeaturedSlider = styled(Slider)`
  position: static;

  .slick-list {
    width: 300px;

    @media screen and (min-width: 1440px) {
      width: 1280px;
      overflow: hidden;
    }
  }
  .slick-slide {
    opacity: 0;
    transition: opacity 0.1s;
  }
  .slick-cloned {
    opacity: 0;
  }
  .slick-active {
    width: 300px !important;
    opacity: 1;
    margin-right: 0px;
    @media screen and (min-width: 1440px) {
      margin-right: 40px;
      width: 340px !important;
    }
  }
`;

export const FeaturedTag = styled.div`
  position: absolute;
  z-index: 10;
  left: 16px;
  top: 332px;
  border-radius: 32px;
  padding: 8px 16px;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => {
    switch (props.text) {
      case "Popular":
        return "#FEE2E2";
      case "New house":
        return "#DBEAFE";
      case "Best Deals":
        return "#D1FAE5";
      default:
        return;
    }
  }};
  color: ${(props) => {
    switch (props.text) {
      case "Popular":
        return "#EF4444";
      case "New house":
        return "#1D4ED8";
      case "Best Deals":
        return "#047857";
      default:
        return;
    }
  }};
`;

export const SalaryBox = styled.div`
  margin-top: 24px;
`;

export const SalaryTitle = styled.h3`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 24px;
  line-height: calc(32 / 24);
  color: #0e1735;
`;

export const SalaryDesc = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: calc(32 / 20);
  color: #3c4563;
`;

export const PersonBox = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: start;
`;

export const PersonName = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: calc(24 / 18);
  color: #0e1735;
`;

export const PersonPlace = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: calc(22 / 14);
  color: #888b97;
`;

export const ArrowRightContainer = styled.div`
  width: 0;
  height: 0;

  @media screen and (min-width: 1440px) {
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 18px;
    left: 97.5%;
    width: 60px;
    height: 52px;
    padding: 12px 16px;
    cursor: pointer;
    color: transparent;
    border: 1px solid transparent;
    border-radius: 32px;
    -webkit-transform: translate(-50%);
    -ms-transform: translate(-50%);
    transform: translate(-50%);
  }
`;

export const ArrowLeftContainer = styled.div`
  width: 0;
  height: 0;

  @media screen and (min-width: 1440px) {
    left: calc(97.5% - 76px);
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 18px;
    display: block;
    width: 60px;
    height: 52px;
    padding: 12px 16px;
    cursor: pointer;
    color: transparent;
    border: 1px solid transparent;
    border-radius: 32px;
    -webkit-transform: translate(-50%);
    -ms-transform: translate(-50%);
    transform: translate(-50%);
  }
`;
