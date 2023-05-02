import * as React from "react";

import Place from "../../images/place.svg";
import Arrow from "../../images/arrow-search.svg";

const Search = () => {
  return (
    <label class="input-with-icon">
      <img src={Place} alt="Place icon" />
      <input type="text" placeholder="Search for the location you want!" />
      <button class="button">
        Search
        <img src={Arrow} alt="arrow icon" />
      </button>
    </label>
  );
};

export default Search;
