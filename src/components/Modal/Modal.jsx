// import { useEffect } from "react";
// import { createPortal } from "react-dom";

// const modalRoot = document.querySelector("#modal-root");

// export default function Modal({ largeImageURL, tags, onClose }) {
//   useEffect(() => {
//     const handleKeydown = (e) => {
//       if (e.code === "Escape") {
//         onClose();
//       }
//     };
//     window.addEventListener("keydown", handleKeydown);
//     return () => {
//       window.removeEventListener("keydown", handleKeydown);
//     };
//   }, [onClose]);

//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };
//   return createPortal(
//     <div onClick={handleBackdropClick} className="Overlay">
//       <div className="Modal">
//         <img width="100%" src={largeImageURL} alt={tags} />
//       </div>
//     </div>,
//     modalRoot
//   );
// }

//  const [showModal, setShowModal] = useState(false);

//  const toggleModal = () => {
//    setShowModal(!showModal);
//  };

//  return (
//    <li className="ImageGalleryItem">
//      <img
//        onClick={toggleModal}
//        className="ImageGalleryItemImage"
//        src={webformatURL}
//        alt={tags}
//      />
//      {showModal ? (
//        <Modal largeImageURL={largeImageURL} tags={tags} onClose={toggleModal} />
//      ) : null}
//    </li>
//  );

// .Overlay {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.8);
//   z-index: 1200;
// }

// .Modal {
//   max-width: calc(100vw - 48px);
//   max-height: calc(100vh - 24px);
// }
