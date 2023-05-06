import { Default, Mobile } from "../Media/Media";

import Place from "../../images/place.svg";
import { ReactComponent as Arrow } from "../../images/arrow-search.svg";

import {
  HeroInput,
  HeroLabel,
  HeroInputImg,
  HeroInputButton,
} from "./HeroSection.styled";

const Search = () => {
  return (
    <HeroLabel>
      <HeroInputImg src={Place} alt="Place icon" />
      <Mobile>
        <HeroInput type="text" placeholder="Search for the location..." />
      </Mobile>
      <Default>
        <HeroInput
          type="text"
          placeholder="Search for the location you want!"
        />
      </Default>

      <HeroInputButton>
        Search
        <Arrow style={{ marginLeft: 4 }} />
      </HeroInputButton>
    </HeroLabel>
  );
};

export default Search;
