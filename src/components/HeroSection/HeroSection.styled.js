import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 120px;
  height: 634px;

  @media screen and (max-width: 767px) {
    height: 600px;
    margin-bottom: 98px;
  }

  .slider-wrapper {
    position: relative;
    display: flex;
    height: 100%;
    width: 100%;
    @media screen and (max-width: 767px) {
      width: 0;
    }
    .slider-bg {
      height: 720px;
      width: 720px;
      padding: 48px;
      padding-right: 0;
      @media screen and (max-width: 767px) {
        width: 280px;
      }
    }
    .slider-img {
      height: 720px;
      width: 720px;
      display: flex;
      position: absolute;
      top: -86px;
      right: -120px;
      @media screen and (max-width: 767px) {
        width: 280px;
      }
    }
  }
  .hero-slider {
    position: absolute;
    right: -120px;
    bottom: 38px;
    @media screen and (max-width: 767px) {
      bottom: -60px;
      right: 0;
    }
    .slick-list {
      width: 690px;
      overflow: hidden;
      @media screen and (max-width: 767px) {
        width: 300px;
        overflow: hidden;
      }
    }
  }
`;

export const HeroBox = styled.div`
  width: 100%;
  @media screen and (min-width: 1440px) {
    width: 496px;
  }
`;

export const HeroTitle = styled.h1`
  font-weight: 600;
  text-transform: capitalize;
  color: #1b1c57;
  -webkit-text-stroke: 1px #1b1c57;
  font-size: 28px;
  line-height: calc(36 / 28);
  margin-bottom: 24px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 24px;
    font-size: 40px;
    line-height: calc(50 / 40);
    width: 370px;
  }
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
  width: 100%;
  margin-bottom: 24px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
    width: 496px;
  }
`;

export const HeroInput = styled.input`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #626687;
  padding: 12px 0 12px 36px;
  border: 1px solid #e0e3eb;
  border-radius: 32px;
  width: 100%;
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

  @media screen and (min-width: 1440px) {
    padding: 16px 0 16px 64px;
  }
`;

export const HeroInputImg = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 8px;

  @media screen and (min-width: 1440px) {
    left: 24px;
  }
`;

export const HeroInputButton = styled.button`
  position: absolute;
  top: 50%;
  right: 4px;
  transform: translateY(-50%);
  border: none;
  padding: 8px 12px;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(22 / 14);
  color: #ffffff;

  display: flex;
  justify-content: center;
  background: #10b981;
  border-radius: 32px;

  transition: all 0.25s ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.13) translateY(-45%);
    outline: none;
  }

  @media screen and (min-width: 1440px) {
    padding: 12px 16px;
    font-weight: 600;
    font-size: 14px;
    line-height: calc(22 / 14);
    min-width: 109px;
  }
`;

export const PartnershipTitle = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: calc(32 / 16);
  color: #888b97;
  text-align: center;

  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`;

export const PartnershipList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  justify-content: space-around;

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 24px;
  }
`;

export const ItemBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  min-width: 202px;

  background: #ffffff;
  box-shadow: 0px 11px 48px rgba(51, 51, 51, 0.06);
  border-radius: 32px;
  padding: 24px;
  margin-left: 11px;
  margin-right: 5px;
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
  padding: 0 10px;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    max-width: 480px;
    padding: 0 20px;
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

export const SubInput = styled(HeroInput)`
  padding: 15px 0 15px 64px;
`;
