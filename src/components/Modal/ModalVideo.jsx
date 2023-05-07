import { useEffect } from "react";
import { createPortal } from "react-dom";
import ReactPlayer from "react-player";
import { Overlay, ModalContainer } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

const ModalVideo = ({ onClose }) => {
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
        <ReactPlayer
          width={900}
          height={500}
          url="https://res.cloudinary.com/du0wwqbv3/video/upload/v1683134143/istockphoto-1400073632-640_adpp_is_vgj9xd.mp4"
          controls={true}
          volume={0.5}
        />
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};

export default ModalVideo;
