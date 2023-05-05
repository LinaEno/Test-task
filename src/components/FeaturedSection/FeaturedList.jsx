import { useState } from "react";

import { house, villa, apartment } from "../../constants/featuredHouse";
import FeaturedItem from "./FeaturedItem";

import ArrowRight from "../../images/arrow-search.svg";
import ArrowLeft from "../../images/arrow-left.svg";
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
} from "./FeaturedSection.styled";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowRightContainer
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#10B981",
      }}
      onClick={onClick}
    >
      <img src={ArrowRight} alt="arrow" width={28} height={28} />
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
        display: "block",
        background: "#10B981",
      }}
      onClick={onClick}
    >
      <img src={ArrowLeft} alt="arrow" width={28} height={28} />
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
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
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
  const [loading, setLoading] = useState(true);

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
      <FeaturedTitleBox>
        <FeaturedTitle>Featured House</FeaturedTitle>
        <FeaturedListBtn>
          <li>
            <Button
              type="button"
              onClick={(event) => handleLinkClick(event, "house")}
            >
              <HouseIcon />
              House
            </Button>
          </li>
          <li>
            <Button
              type="button"
              onClick={(event) => handleLinkClick(event, "villa")}
            >
              <VillaIcon />
              Villa
            </Button>
          </li>
          <li>
            <Button
              type="button"
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
