import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 120px;
  height: 634px;
`;

export const HeroBox = styled.div`
  width: 496px;
`;

export const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 40px;
  line-height: 50px;
  width: 370px;
  text-transform: capitalize;
  color: #1b1c57;
  margin-bottom: 24px;
  -webkit-text-stroke: 1px #1b1c57;
`;

export const HeroTitleSpan = styled.span`
  color: #fff;
  text-shadow: -1px -1px 0 #1b1c57, 1px -1px 0 #1b1c57, -1px 1px 0 #1b1c57,
    1px 1px 0 #1b1c57;
  -webkit-text-stroke: 0px #1b1c57;
`;

export const HeroText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #626687;
  opacity: 0.75;
  margin-bottom: 32px;
`;

export const HeroLabel = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  width: 496px;
`;

export const HeroInput = styled.input`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #626687;
  padding: 16px 0 16px 64px;
  border: 1px solid #e0e3eb;
  border-radius: 32px;
  width: 496px;
  transition: all 0.25s ease-in-out;

  &::placeholder {
    color: #888b97;
  }

  &:hover {
    outline: none;
    border: 1px solid #10b981;
  }

  &:focus {
    outline: none;
    border: 1px solid #10b981;
  }
`;

export const HeroInputImg = styled.img`
  position: absolute;
  top: 50%;
  left: 24px;
  transform: translateY(-50%);
`;

export const HeroInputButton = styled.button`
  position: absolute;
  top: 50%;
  right: 4px;
  transform: translateY(-50%);
  padding: 12px 16px 12px 16px;
  border: none;

  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;

  display: flex;
  justify-content: center;
  background: #10b981;
  border-radius: 32px;
  min-width: 109px;

  transition: all 0.25s ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.13) translateY(-45%);
    outline: none;
  }
`;

export const PartnershipTitle = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: #888b97;
`;

export const PartnershipList = styled.ul`
  display: flex;
  gap: 32px;
`;

export const ItemBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  background: #ffffff;
  box-shadow: 0px 11px 48px rgba(51, 51, 51, 0.06);
  border-radius: 32px;
  padding: 24px;
  margin-left: 16px;
`;

export const ItemTitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #1b1c57;
  margin-bottom: 2px;
`;

export const ItemDesc = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #68799f;
  max-width: 152px;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding: 0 40px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 120px;
  }
  @media screen and (min-width: 1920px) {
    max-width: 1920px;
    padding: 0 240px;
  }
`;
