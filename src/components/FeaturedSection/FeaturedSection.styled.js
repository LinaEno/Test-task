import styled from "styled-components";
import Slider from "react-slick";
import { ReactComponent as ArrowRight } from "../../images/arrow-search.svg";
import { ReactComponent as ArrowLeft } from "../../images/arrow-left.svg";

export const FeaturedContainer = styled.section`
  position: relative;
  margin-bottom: 60px;

  @media screen and (min-width: 480px) {
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1200px) {
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

  @media screen and (min-width: 1920px) {
    font-size: 18px;
    line-height: calc(24 / 18);
  }
`;

export const FeaturedTitle = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: calc(40 / 32);
  text-transform: capitalize;
  color: #1b1c57;
  margin-bottom: 12px;

  @media screen and (min-width: 1200px) {
    font-size: 32px;
    line-height: calc(40 / 32);
    margin-bottom: 0;
  }
  @media screen and (min-width: 1920px) {
    font-size: 40px;
    line-height: calc(50 / 40);
  }
`;

export const FeaturedTitleBox = styled.div`
  display: block;
  margin-bottom: 40px;

  @media screen and (min-width: 1200px) {
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

  @media screen and (min-width: 480px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1200px) {
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
  padding: 8px 16px;
  border: 1px solid #e0e3eb;
  border-radius: 32px;
  transition: all 0.25s ease-in-out;
  background-color: transparent;

  &:hover,
  &:focus {
    color: #10b981;
    fill: #10b981;
    background-color: #d1fae5;
    border-color: #d1fae5;
  }
  @media screen and (min-width: 768px) {
    padding: 12px 24px;
  }

  &.active {
    color: #10b981;
    fill: #10b981;
    background-color: #d1fae5;
    border-color: #d1fae5;
  }
`;

export const FeaturedImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 24px;
  height: 382px;
  @media screen and (min-width: 480px) {
    width: 340px;
  }
  @media screen and (min-width: 1920px) {
    width: 380px;
  }
`;

export const FeaturedSliderItem = styled.div`
  position: relative;

  @media screen and (min-width: 480px) {
    margin-left: 66px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 0;
  }
`;

export const FeaturedSlider = styled(Slider)`
  position: static;

  .slick-list {
    width: 300px;

    @media screen and (min-width: 480px) {
      width: 440px;
      overflow: hidden;
    }
    @media screen and (min-width: 768px) {
      width: 700px;
    }
    @media screen and (min-width: 1200px) {
      width: 1120px;
    }
    @media screen and (min-width: 1440px) {
      width: 1280px;
    }
    @media screen and (min-width: 1920px) {
      width: 1920px;
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

    @media screen and (min-width: 480px) {
      margin-right: 40px;
      width: 340px !important;
    }
    @media screen and (min-width: 1920px) {
      margin-right: 40px;
      width: 380px !important;
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
  @media screen and (min-width: 1920px) {
    font-size: 30px;
    line-height: calc(38 / 30);
  }
`;

export const SalaryDesc = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: calc(32 / 20);
  color: #3c4563;
  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: calc(36 / 24);
  }
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
  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: calc(26 / 20);
  }
`;

export const PersonPlace = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: calc(22 / 14);
  color: #888b97;
  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const ArrowRightContainer = styled.div`
  width: 0;
  height: 0;

  @media screen and (min-width: 1200px) {
    display: block;
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 30px;
    left: 97.5%;
    width: 60px;
    height: 52px;
    padding: 12px 16px;
    cursor: pointer;
    color: transparent;
    border: 1px solid transparent;
    border-radius: 32px;
    background-color: #10b981;
    fill: #fff;
    -webkit-transform: translate(-50%);
    -ms-transform: translate(-50%);
    transform: translate(-50%);
    transition: all 0.25s ease-in-out;
    @media screen and (min-width: 1920px) {
      top: 36px;
    }
    &:hover,
    &:focus {
      fill: #000;
      background-color: #e0e3eb;
    }
  }
`;

export const ArrowLeftContainer = styled.div`
  width: 0;
  height: 0;

  @media screen and (min-width: 1200px) {
    display: block;
    left: calc(97.5% - 76px);
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 30px;
    display: block;
    width: 60px;
    height: 52px;
    padding: 12px 16px;
    cursor: pointer;
    color: transparent;
    border: 1px solid transparent;
    border-radius: 32px;
    background-color: #e0e3eb;
    fill: #000;
    -webkit-transform: translate(-50%);
    -ms-transform: translate(-50%);
    transform: translate(-50%);
    transition: all 0.25s ease-in-out;
    @media screen and (min-width: 1920px) {
      top: 36px;
    }
    &:hover,
    &:focus {
      background-color: #10b981;
      fill: #fff;
    }
  }
`;

export const ArrowLeftStyled = styled(ArrowLeft)`
  width: 0;
  height: 0;
  @media screen and (min-width: 1200px) {
    width: 28px;
    height: 28px;
  }
`;

export const ArrowRightStyled = styled(ArrowRight)`
  width: 0;
  height: 0;
  @media screen and (min-width: 1200px) {
    width: 28px;
    height: 28px;
  }
`;
