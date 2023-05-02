import styled from "styled-components";

export const ArrowRightContainer = styled.div`
  font-size: 0;
  line-height: 0;
  position: absolute;
  top: -40px;
  display: block;
  width: 60px;
  height: 52px;
  padding: 0;
  cursor: pointer;
  color: transparent;
  border: 1px solid transparent;
  border-radius: 32px;
  /* -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%); */
`;

export const ArrowLeftContainer = styled.div`
  right: 0;
  font-size: 0;
  line-height: 0;
  position: absolute;
  top: -40px;
  display: block;
  width: 60px;
  height: 52px;
  padding: 0;
  transform: translate(0, -50%);
  cursor: pointer;
  color: transparent;
  border: 1px solid transparent;
  border-radius: 32px;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);
`;
