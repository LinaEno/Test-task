import { useState } from "react";

import useScrollDisable from "../../hooks/useScrollDisable";
import SliderElement from "./SliderElement";
import ModalVideo from "../Modal/ModalVideo";
import { photoTour } from "../../constants/tour";
import { Default } from "../Media/Media";

import Play from "../../images/tour/play.svg";
import Tour4 from "../../images/tour/tour-foto4.jpg";

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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const toggleVideoModal = () => {
    setShowModal(!showModal);
  };

  useScrollDisable(showModal);

  return (
    <SrcContainer>
      <Default>
        <VideoBox>
          <img src={Tour4} alt="Video" />
          <VideoBtn type="button" onClick={toggleVideoModal}>
            <img src={Play} alt="Play button" />
          </VideoBtn>
          {showModal ? <ModalVideo onClose={toggleVideoModal} /> : null}
        </VideoBox>
      </Default>
      <SliderTourSection {...settings}>
        {photoTour.map((tour) => (
          <SliderElement key={tour.smallImg} tour={tour} />
        ))}
      </SliderTourSection>
    </SrcContainer>
  );
};

export default TourSrc;
