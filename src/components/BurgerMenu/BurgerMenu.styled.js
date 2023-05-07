import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 9999;
`;

export const Box = styled.div``;

export const Hamburger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    width: 30px;
    height: 23px;
    position: relative;
    z-index: 2;
    cursor: pointer;

    div {
      width: 100%;
      height: 3px;
      background-color: #000;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) =>
          open ? "translateX(-20px)" : "translateX(0)"};
      }

      :nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;

export const MenuLinks = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  background: #fff;
  height: 100vh;
  text-align: center;
  padding: 72px 40px 40px;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  width: 100%;
  z-index: 1;
  visibility: ${({ open }) => (open ? "visible" : "hidden")};

  .menu-link {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    text-transform: capitalize;
    padding: 8px 16px;

    background: rgba(255, 255, 255, 0.1);
    border: 1px solid #047857;
    color: #047857;
    fill: #047857;
    border-radius: 32px;
    transition: all 0.25s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-width: 117px;

    &:hover,
    &:focus {
      border: 1px solid #047857;
      color: #047857;
      outline: none;
      fill: #047857;
    }
  }
`;
