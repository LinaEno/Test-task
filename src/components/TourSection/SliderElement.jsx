import { useState } from "react";
import Modal from "../Modal/Modal";
import { Default } from "../Media/Media";

const SliderElement = ({ tour }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="slider-tour">
      <img
        className="slider-tour-img"
        src={tour.largeImg}
        alt="Tour foto"
        onClick={toggleModal}
      />
      <Default>
        {showModal ? <Modal onClose={toggleModal} tour={tour} /> : null}
      </Default>
    </div>
  );
};

export default SliderElement;
