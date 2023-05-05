import { Link } from "react-router-dom";
import styled from "styled-components";

export const ArticleContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  @media screen and (min-width: 1200px) {
    margin-bottom: 120px;
  }
`;

export const ArticlePreTitle = styled.p`
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

export const ArticleTitle = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: calc(40 / 32);
  text-align: center;
  text-transform: capitalize;
  color: #1b1c57;
  width: 300px;
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    width: 424px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 40px;
    line-height: calc(50 / 40);
    width: 560px;
  }
`;

export const ArticleButton = styled.button`
  padding: 12px 16px 12px 16px;
  border: none;

  font-weight: 600;
  font-size: 14px;
  line-height: calc(22 / 14);
  color: #ffffff;

  display: block;
  background: #10b981;
  border-radius: 32px;
  width: 118px;
  margin-bottom: 24px;

  transition: all 0.25s ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.13);
    outline: none;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 18px;
    line-height: calc(24 / 18);
    width: auto;
  }
`;

export const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }

  @media screen and (min-width: 1440px) {
    gap: 68px;
  }

  @media screen and (min-width: 1920px) {
    gap: 88px;
  }
`;

export const SmallArticleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const SmallArticleWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 300px;
  cursor: pointer;

  @media screen and (min-width: 440px) {
    width: 400px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 32px;
    width: 100%;
  }
`;

export const SmallArticleImg = styled.img`
  @media screen and (min-width: 1920px) {
    width: 250px;
  }
`;

export const PersonData = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 17px;
`;

export const PersonName = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: calc(22 / 14);
  color: #3c4563;

  @media screen and (min-width: 1920px) {
    font-size: 18px;
    line-height: calc(32 / 18);
  }
`;

export const SmallArticleTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: calc(32 / 18);
  text-transform: capitalize;
  color: #1b1c57;
  width: 300px;
  margin-bottom: 16px;

  @media screen and (min-width: 480px) {
    width: 340px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`;

export const ArticleDateBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ArticleDate = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: calc(24 / 14);
  color: #888b97;

  @media screen and (min-width: 1920px) {
    font-size: 18px;
    line-height: calc(32 / 18);
  }
`;

export const BigArticleWrapper = styled(Link)`
  cursor: pointer;
  width: 500px;

  @media screen and (min-width: 1440px) {
    width: 560px;
  }

  @media screen and (min-width: 1920px) {
    width: 720px;
  }
`;

export const BigArticleImg = styled.img`
  width: 500px;

  @media screen and (min-width: 1440px) {
    width: 560px;
  }

  @media screen and (min-width: 1920px) {
    width: 720px;
  }
`;

export const BigArticleTitle = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: calc(32 / 24);
  text-transform: capitalize;
  color: #1b1c57;
  margin-bottom: 12px;

  @media screen and (min-width: 1920px) {
    font-size: 32px;
    line-height: calc(40 / 32);
    margin-bottom: 18px;
  }
`;

export const BigArticleDesc = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: calc(24 / 14);
  color: #626687;
  opacity: 0.75;
  width: 500px;
  margin-bottom: 16px;

  @media screen and (min-width: 1440px) {
    width: 560px;
  }

  @media screen and (min-width: 1920px) {
    width: 720px;
    font-size: 20px;
    line-height: calc(28 / 20);
  }
`;
