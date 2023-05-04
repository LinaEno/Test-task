import Slider from "react-slick";
import styled from "styled-components";

export const SliderTourSection = styled(Slider)`
  width: 521px;
  position: absolute;
  bottom: 0;
  right: 20px;
  cursor: pointer;

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

export const TourContainer = styled.section`
  padding-left: 40px;
  margin-bottom: 120px;
  display: flex;
  justify-content: space-between;
`;

export const TourDescriptionContainer = styled.div`
  padding: 28px 0;
`;

export const TourPreTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: calc(18 / 14);
  text-transform: capitalize;
  color: #f59e0b;
  margin-bottom: 12px;
`;

export const TourTitle = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: calc(40 / 32);
  text-transform: capitalize;
  color: #1b1c57;
  margin-bottom: 16px;
`;

export const TourDesc = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: calc(28 / 16);
  color: #626687;
  opacity: 0.75;
  width: 413px;
  margin-bottom: 16px;
`;

export const TourListTitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: calc(28 / 16);
  color: #1b1c57;
  opacity: 0.75;
  margin-bottom: 16px;
`;

export const TourList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 440px;
  margin-bottom: 66px;
`;

export const TourListItem = styled.li`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: start;
  min-width: 193px;
  &:nth-child(odd) {
    margin-right: 53px;
  }
  &:nth-child(1),
  &:nth-child(2) {
    margin-bottom: 16px;
  }
`;

export const TourListText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: calc(20 / 16);
  text-transform: capitalize;
  color: #3c4563;
`;

export const TourPersonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const TourPersonInfo = styled.div`
  margin-left: 24px;
  margin-right: 57px;
`;
export const TourPersonName = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: calc(24 / 18);
  color: #0e1735;
`;
export const TourPersonPosition = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: calc(24 / 16);
  color: #888b97;
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
