import Play from "../../images/tour/play.svg";
import Tour4 from "../../images/tour/tour-foto4.jpg";

import SliderElement from "./SliderElement";

import { fotoTour } from "../../constants/tour";
import { useState } from "react";
import ModalVideo from "../Modal/ModalVideo";
import { SliderTourSection } from "./TourSection.styled";

const TourSrc = () => {
  const [showModal, setShowModal] = useState(false);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  const toggleVideoModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div>
        <img src={Tour4} alt="Video" />
        <button type="button" onClick={toggleVideoModal}>
          <img src={Play} alt="Play button" />
        </button>
        {showModal ? <ModalVideo onClose={toggleVideoModal} /> : null}
      </div>
      <SliderTourSection {...settings}>
        {fotoTour.map((tour, idx) => (
          <SliderElement key={idx} tour={tour} />
        ))}
      </SliderTourSection>
    </div>
  );
};

export default TourSrc;

