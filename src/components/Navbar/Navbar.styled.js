import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  padding-top: 40px;

  /* @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 40px 40px 0;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 40px 120px 0;
  } */
`;

export const LogoBox = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  &:hover,
  &:focus {
    outline: none;
    transform: scale(1.05);
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
`;

export const NavBox = styled.nav`
  display: flex;
  align-items: center;
  gap: 56px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 24px;
`;

export const NavLink = styled(Link)`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-transform: capitalize;
  color: #f0f3fd;
  padding: 8px 16px;
  fill: #f0f3fd;

  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 32px;
  transition: all 0.25s ease-in-out;

  display: flex;
  align-items: center;
  gap: 10px;

  &:hover,
  &:focus {
    border: 1px solid #047857;
    color: #047857;
    outline: none;
    fill: #047857;
  }
`;

export const ButtonSignUp = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #047857;
  padding: 12px 24px;

  background: #d1fae5;
  border: transparent;
  border-radius: 32px;
  transition: all 0.25s ease-in-out;

  &:hover,
  &:focus {
    color: #f0f3fd;
    background: #10b981;
    outline: none;
  }
`;
