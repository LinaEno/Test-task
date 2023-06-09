import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 120;
`;
export const ModalContainer = styled.div`
  max-width: 60%;
  max-height: 60%;
  margin: auto;
  overflow: hidden;
`;

export const ModalImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: auto;
  max-height: 500px;
`;
