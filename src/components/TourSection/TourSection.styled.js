import Slider from "react-slick";
import styled from "styled-components";

export const SliderTourSection = styled(Slider)`
  position: absolute;
  cursor: pointer;
  width: 300px;
  bottom: -200px;
  @media screen and (min-width: 480px) {
    right: 60px;
  }
  @media screen and (min-width: 768px) {
    right: 0;
    bottom: 0;
  }
  @media screen and (min-width: 1200px) {
    width: 521px;
    bottom: 0;
    right: 20px;
  }

  .slider-tour {
    width: 0;
    @media screen and (min-width: 1200px) {
      width: 108px;
    }
  }
  .slick-slide {
    margin-top: auto;
  }
  .slick-active {
    width: 0 !important;
    @media screen and (min-width: 1200px) {
      width: 108px !important;
    }
  }
  .slick-slide .slider-tour {
    margin-left: 12px;
  }
  .slick-slide .slider-tour-img {
    background: none;
    border: none;
    padding: 0;
    width: 96px;
    height: 80px;
    &:focus {
      outline: 1px solid black;
    }
    img {
      width: 96px;
      height: 80px;
      object-fit: cover;
    }
  }
  .slick-current .slider-tour {
    margin-left: 0;
  }
  .slick-current,
  .slick-current .slider-tour-img {
    width: 296px !important;
    height: 168px;
    img {
      width: 296px !important;
      height: 168px;
    }
  }

  .slick-prev,
  .slick-next {
    display: none !important;
  }
`;

export const TourContainer = styled.section`
  position: relative;
  margin-bottom: 248px;

  @media screen and (min-width: 480px) {
    margin-bottom: 268px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1200px) {
    padding-left: 40px;
    margin-bottom: 120px;
    display: flex;
    justify-content: space-between;
  }
`;

export const BgImage = styled.img`
  display: none;

  @media screen and (min-width: 1200px) {
    display: block;
    position: absolute;
    right: -40px;
    top: -286px;
    z-index: -1;
  }
  @media screen and (min-width: 1440px) {
    right: -120px;
  }
  @media screen and (min-width: 1920px) {
    right: -240px;
  }
`;

export const TourDescriptionContainer = styled.div`
  padding: 0;
  @media screen and (min-width: 1200px) {
    padding: 28px 0;
  }
`;

export const TourPreTitle = styled.p`
  position: relative;
  font-weight: 500;
  font-size: 14px;
  line-height: calc(18 / 14);
  text-transform: capitalize;
  color: #f59e0b;
  margin-bottom: 12px;

  @media screen and (min-width: 1200px) {
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

export const TourTitle = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: calc(40 / 32);
  text-transform: capitalize;
  color: #1b1c57;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 32px;
    line-height: calc(40 / 32);
  }

  @media screen and (min-width: 1920px) {
    font-size: 40px;
    line-height: calc(50 / 40);
  }
`;

export const TourDesc = styled.p`
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: calc(28 / 16);
  color: #626687;
  opacity: 0.75;
  margin-bottom: 16px;
  @media screen and (min-width: 480px) {
    width: 440px;
  }
  @media screen and (min-width: 1200px) {
    width: 413px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: calc(28 / 20);
    min-width: 500px;
  }
`;

export const TourListTitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: calc(28 / 16);
  color: #1b1c57;
  opacity: 0.75;
  margin-bottom: 16px;
  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: calc(28 / 20);
  }
`;

export const TourList = styled.ul`
  display: block;
  @media screen and (min-width: 480px) {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 450px;
  }
  @media screen and (min-width: 1200px) {
    width: 440px;
    margin-bottom: 66px;
  }
`;

export const TourListItem = styled.li`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: start;
  margin: 0 0 16px;

  @media screen and (min-width: 480px) {
    min-width: 193px;
    &:nth-child(odd) {
      margin-right: 53px;
    }
    &:nth-child(1),
    &:nth-child(2) {
      margin-bottom: 16px;
    }
  }
`;

export const TourListText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: calc(20 / 16);
  text-transform: capitalize;
  color: #3c4563;
  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: calc(28 / 20);
  }
`;

export const TourPersonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media screen and (min-width: 480px) {
    justify-content: start;
    flex-direction: row;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1200px) {
    gap: 0;
    margin-bottom: 0;
  }
`;

export const TourPersonInfo = styled.div`
  margin-right: 0px;
  margin-left: 0px;
  text-align: center;
  @media screen and (min-width: 480px) {
    margin-right: 24px;
    text-align: left;
  }
  @media screen and (min-width: 1200px) {
    margin-right: 57px;
margin-left: 24px;
  }
`;

export const TourPersonName = styled.p`
  color: #0e1735;
  font-weight: 500;
  font-size: 16px;
  line-height: calc(20 / 16);

  @media screen and (min-width: 1200px) {
    font-size: 18px;
    line-height: calc(24 / 18);
  }
  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: calc(28 / 20);
  }
`;

export const TourPersonPosition = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: calc(20 / 16);
  color: #888b97;

  @media screen and (min-width: 1200px) {
    font-size: 18px;
    line-height: calc(24 / 18);
  }
  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: calc(28 / 20);
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  gap: 16px;
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(22 / 14);
  color: #ffffff;
  fill: #ffffff;
  padding: 12px 16px;
  border-radius: 32px;
  background-color: #10b981;
  outline: none;
  border: none;
  transition: all 0.25s ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.13);
  }

  @media screen and (min-width: 1920px) {
    font-size: 18px;
    line-height: calc(28 / 18);
  }
`;

export const VideoBox = styled.div`
  position: relative;
  width: 488px;
`;

export const SrcContainer = styled.div`
  position: relative;
`;

export const VideoBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: none;
  outline: none;
  transition: all 0.25s ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.05) translate(-50%, -50%);
  }
`;
