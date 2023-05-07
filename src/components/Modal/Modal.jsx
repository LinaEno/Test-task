import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalContainer, ModalImage } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ tour, onClose }) => {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContainer>
        <ModalImage src={tour.largeImg} alt="Large img" />
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
