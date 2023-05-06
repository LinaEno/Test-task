import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }
`;

export const LogoBox = styled.a`
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
  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`;

export const NavBox = styled.nav`
  display: flex;
  align-items: center;
  gap: 56px;
`;

export const NavList = styled.ul`
  position: relative;
  display: flex;
  gap: 24px;
`;

export const PropertyList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: 768px) {
    position: absolute;
    right: 0;
    transform: translate(-110%, 70%);
    gap: 24px;
  }
`;

export const NavLink = styled(Link)`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-transform: capitalize;

  color: #888b97;
  fill: #888b97;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #888b97;

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

  @media screen and (min-width: 1200px) {
    color: #f0f3fd;
    fill: #f0f3fd;

    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
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

export const PropertyLink = styled(Link)`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-transform: capitalize;
  color: #888b97;
  fill: #888b97;
  padding: 8px 16px;

  background: rgba(255, 255, 255);
  border: 1px solid #888b97;
  border-radius: 32px;
  transition: all 0.25s ease-in-out;

  display: flex;
  align-items: center;
  gap: 10px;

  &:hover,
  &:focus {
    color: #10b981;
    fill: #10b981;
    background-color: #d1fae5;
    border-color: #d1fae5;
  }

  @media screen and (min-width: 1200px) {
    background: rgba(255, 255, 255, 0.1);
  }
`;
