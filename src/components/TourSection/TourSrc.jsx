import Play from "../../images/tour/play.svg";
import Tour4 from "../../images/tour/tour-foto4.jpg";

import SliderElement from "./SliderElement";

import { fotoTour } from "../../constants/tour";
import { useState } from "react";
import ModalVideo from "../Modal/ModalVideo";
import {
  SliderTourSection,
  SrcContainer,
  VideoBox,
  VideoBtn,
} from "./TourSection.styled";

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
    <SrcContainer>
      <VideoBox>
        <img src={Tour4} alt="Video" />
        <VideoBtn type="button" onClick={toggleVideoModal}>
          <img src={Play} alt="Play button" />
        </VideoBtn>
        {showModal ? <ModalVideo onClose={toggleVideoModal} /> : null}
      </VideoBox>
      <SliderTourSection {...settings}>
        {fotoTour.map((tour, idx) => (
          <SliderElement key={idx} tour={tour} />
        ))}
      </SliderTourSection>
    </SrcContainer>
  );
};

export default TourSrc;
