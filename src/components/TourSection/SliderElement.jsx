import { useState } from "react";
import useScrollDisable from "../../hooks/useScrollDisable";
import Modal from "../Modal/Modal";
import { Default } from "../Media/Media";

const SliderElement = ({ tour }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useScrollDisable(showModal);

  return (
    <div className="slider-tour">
      <button className="slider-tour-img" type="button" onClick={toggleModal}>
        <img src={tour.largeImg} alt="Tour img" />
      </button>

      <Default>
        {showModal ? <Modal onClose={toggleModal} tour={tour} /> : null}
      </Default>
    </div>
  );
};

export default SliderElement;
