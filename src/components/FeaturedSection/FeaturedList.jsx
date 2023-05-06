import { useState } from "react";

import FeaturedItem from "./FeaturedItem";
import { house, villa, apartment } from "../../constants/featuredHouse";

import { ReactComponent as HouseIcon } from "../../images/house-fill.svg";
import { ReactComponent as VillaIcon } from "../../images/ic_round-villa.svg";
import { ReactComponent as ApartmentIcon } from "../../images/ic_round-apartment.svg";

import {
  ArrowRightContainer,
  ArrowLeftContainer,
  FeaturedListBtn,
  FeaturedTitle,
  FeaturedTitleBox,
  Button,
  FeaturedSlider,
  ArrowLeftStyled,
  ArrowRightStyled,
} from "./FeaturedSection.styled";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowRightContainer
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <ArrowRightStyled />
    </ArrowRightContainer>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowLeftContainer
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <ArrowLeftStyled />
    </ArrowLeftContainer>
  );
}

const settings = {
  prevArrow: <SamplePrevArrow />,
  nextArrow: <SampleNextArrow />,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
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

const FeaturedList = () => {
  const [dataArray, setDataArray] = useState(house);
  const [activeButton, setActiveButton] = useState("house");
  const [loading, setLoading] = useState(true);

  const handleLinkClick = (event, arrayName) => {
    event.preventDefault();
    switch (arrayName) {
      case "house":
        setDataArray(house);
        setActiveButton("house");
        break;
      case "villa":
        setDataArray(villa);
        setActiveButton("villa");
        break;
      case "apartment":
        setDataArray(apartment);
        setActiveButton("apartment");
        break;
      default:
        setDataArray([]);
        break;
    }
  };

  return (
    <>
      <FeaturedTitleBox>
        <FeaturedTitle>Featured House</FeaturedTitle>
        <FeaturedListBtn>
          <li>
            <Button
              type="button"
              className={`button ${activeButton === "house" ? "active" : ""}`}
              onClick={(event) => handleLinkClick(event, "house")}
            >
              <HouseIcon />
              House
            </Button>
          </li>
          <li>
            <Button
              type="button"
              className={`button ${activeButton === "villa" ? "active" : ""}`}
              onClick={(event) => handleLinkClick(event, "villa")}
            >
              <VillaIcon />
              Villa
            </Button>
          </li>
          <li>
            <Button
              type="button"
              className={`button ${
                activeButton === "apartment" ? "active" : ""
              }`}
              onClick={(event) => handleLinkClick(event, "apartment")}
            >
              <ApartmentIcon />
              Apartment
            </Button>
          </li>
        </FeaturedListBtn>
      </FeaturedTitleBox>
      {loading && <h2>Loading...</h2>}
      <FeaturedSlider {...settings}>
        {dataArray.map((item) => (
          <FeaturedItem onLoad={setLoading} item={item} key={item.id} />
        ))}
      </FeaturedSlider>
    </>
  );
};

export default FeaturedList;
