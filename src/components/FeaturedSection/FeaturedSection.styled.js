import styled from "styled-components";
import Slider from "react-slick";

export const FeaturedSlider = styled(Slider)`
  position: static;
`;

export const FeaturedContainer = styled.section`
  position: relative;
  padding-left: 40px;
`;

export const FeaturedPreTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: calc(18 / 14);
  text-transform: capitalize;
  color: #f59e0b;
`;

export const FeaturedTitle = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: calc(40 / 32);
  text-transform: capitalize;
  color: #1b1c57;
`;

export const FeaturedTitleBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: start;
  gap: 136px;
  margin-bottom: 40px;
`;

export const FeaturedListBtn = styled.ul`
  display: flex;
  gap: 32px;
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

export const ArrowRightContainer = styled.div`
  font-size: 0;
  line-height: 0;
  position: absolute;
  top: 18px;
  left: 100%;
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
`;

export const ArrowLeftContainer = styled.div`
  left: calc(100% - 76px);
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
`;
