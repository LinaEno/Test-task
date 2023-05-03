import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 496px;
`;

export const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 40px;
  line-height: 50px;
  text-transform: capitalize;
  color: #1b1c57;
  margin-bottom: 24px;
`;

export const HeroTitleSpan = styled.span`
  color: transparent;
  -webkit-text-stroke: 1px #1b1c57;
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
