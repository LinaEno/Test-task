import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterBox = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 40px;

  @media screen and (min-width: 480px) {
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    padding-bottom: 60px;
  }

  @media screen and (min-width: 1200px) {
    gap: 174px;
  }

  @media screen and (min-width: 1440px) {
    gap: 254px;
    padding-bottom: 120px;
  }
`;

export const LogoLink = styled.a`
  font-family: "Lexend", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: calc(20 / 16);

  text-transform: capitalize;
  color: #1b1c57;
  transition: all 0.25s ease-in-out;

  &:hover,
  &:focus {
    color: #047857;
    outline: none;
    transform: scale(1.05);
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`;

export const FooterDesc = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: calc(24 / 14);
  color: #626687;
  opacity: 0.75;
  width: 300px;
  margin-top: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 480px) {
    width: 400px;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  @media screen and (min-width: 1200px) {
    width: 320px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: calc(28 / 20);
    width: 400px;
  }
`;

export const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const SocialLink = styled(Link)`
  fill: #3c4563;
  transition: all 0.25s ease-in-out;

  &:hover,
  &:focus {
    fill: #047857;
    outline: none;
  }
`;

export const NavBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 24px;
  width: 300px;

  @media screen and (min-width: 480px) {
    width: 440px;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    flex-wrap: nowrap;
    justify-content: flex-end;
  }

  @media screen and (min-width: 1200px) {
    gap: 88px;
  }
`;

export const NavTitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
  line-height: calc(22 / 18);
  text-transform: capitalize;
  color: #0e1735;
  margin-bottom: 12px;

  @media screen and (min-width: 1200px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: 1200px) {
    gap: 18px;
  }
`;

export const NavLink = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  line-height: calc(18 / 14);
  text-transform: capitalize;
  color: #888b97;

  &:hover,
  &:focus {
    color: #047857;
    outline: none;
    transform: scale(1.05);
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: calc(24 / 20);
  }
`;

export const NavItem = styled.li`
  min-width: 101px;
`;

export const NavItemContact = styled.li`
  @media screen and (min-width: 768px) {
    width: 130px;
  }

  @media screen and (min-width: 1200px) {
    width: 270px;
  }

  @media screen and (min-width: 1920px) {
    width: 340px;
  }
`;

export const ContactLink = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: calc(18 / 14);
  text-transform: capitalize;
  color: #888b97;

  &:hover,
  &:focus {
    color: #047857;
    outline: none;
    transform: scale(1.05);
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: calc(24 / 20);
  }
`;
