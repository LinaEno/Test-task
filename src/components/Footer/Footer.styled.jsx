import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterBox = styled.footer`
  display: flex;
  gap: 254px;
  margin-bottom: 120px;
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
`;

export const FooterDesc = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: calc(24 / 14);
  color: #626687;
  opacity: 0.75;
  width: 320px;
  margin-top: 16px;
  margin-bottom: 24px;
`;

export const SocialList = styled.ul`
  display: flex;
  gap: 24px;
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
  gap: 88px;
`;

export const NavTitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
  line-height: calc(22 / 18);
  text-transform: capitalize;
  color: #0e1735;
  margin-bottom: 24px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
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
`;

export const NavItem = styled.li`
  min-width: 101px;
`;

export const NavItemContact = styled.li`
  min-width: 270px;
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
`;
