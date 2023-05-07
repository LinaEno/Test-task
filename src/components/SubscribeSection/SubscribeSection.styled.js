import styled from "styled-components";
import { HeroLabel } from "../HeroSection/HeroSection.styled";

export const SubSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 10px;
  border-radius: 32px;
  margin-bottom: 60px;

  @media screen and (min-width: 480px) {
    padding: 36px 20px;
  }

  @media screen and (min-width: 768px) {
    padding: 65px 0;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 120px;
  }
`;
export const StyledForm = styled.form`
  max-width: 425px;
  width: 100%;
  @media screen and (min-width: 1920px) {
    max-width: 500px;
  }
`;

export const SubTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: calc(32 / 24);
  text-align: center;
  text-transform: capitalize;
  color: #1b1c57;
  width: 280px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: calc(48 / 32);
    width: 424px;
    margin-bottom: 32px;
  }
`;

export const SubImg = styled.img`
  position: absolute;
  content: "";
`;

export const SubLabel = styled(HeroLabel)`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
    width: 496px;
  }
`;
