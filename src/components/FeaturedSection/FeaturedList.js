import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { house, villa, apartment } from "../../constants/featuredHouse";
import FeaturedItem from "./FeaturedItem";

import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import {
  ArrowRightContainer,
  ArrowLeftContainer,
} from "./FeaturedSection.styled";

// import Arrow from "../../images/arrow-search.svg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowRightContainer
      className={className}
      style={{ ...style, display: "block", background: "#10B981" }}
      onClick={onClick}
    >
      <MdOutlineArrowForwardIos />
    </ArrowRightContainer>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowLeftContainer
      className={className}
      style={{ ...style, display: "block", background: "#10B981" }}
      onClick={onClick}
    >
      <MdOutlineArrowBackIos />
    </ArrowLeftContainer>
  );
}

const settings = {
  prevArrow: <SamplePrevArrow />,
  nextArrow: <SampleNextArrow />,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const FeaturedList = () => {
  const [dataArray, setDataArray] = useState(house);

  const handleLinkClick = (event, arrayName) => {
    event.preventDefault();
    switch (arrayName) {
      case "house":
        setDataArray(house);
        break;
      case "villa":
        setDataArray(villa);
        break;
      case "apartment":
        setDataArray(apartment);
        break;
      default:
        setDataArray([]);
        break;
    }
  };

  return (
    <>
      <ul>
        <li>
          <a href="#" onClick={(event) => handleLinkClick(event, "house")}>
            House
          </a>
        </li>
        <li>
          <a href="#" onClick={(event) => handleLinkClick(event, "villa")}>
            Villa
          </a>
        </li>
        <li>
          <a href="#" onClick={(event) => handleLinkClick(event, "apartment")}>
            Apartment
          </a>
        </li>
      </ul>
      <Slider {...settings}>
        {dataArray.map((item) => (
          <FeaturedItem item={item} key={item.id} />
        ))}
      </Slider>
    </>
  );
};

export default FeaturedList;
