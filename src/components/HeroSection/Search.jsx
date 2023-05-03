import {
  HeroInput,
  HeroLabel,
  HeroInputImg,
  HeroInputButton,
} from "./HeroSection.styled";

import Place from "../../images/place.svg";
import Arrow from "../../images/arrow-search.svg";

const Search = () => {
  return (
    <HeroLabel>
      <HeroInputImg src={Place} alt="Place icon" />
      <HeroInput type="text" placeholder="Search for the location you want!" />
      <HeroInputButton>
        Search
        <img src={Arrow} alt="Arrow icon" style={{ marginLeft: 4 }} />
      </HeroInputButton>
    </HeroLabel>
  );
};

export default Search;
