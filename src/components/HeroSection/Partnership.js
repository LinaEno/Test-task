import * as React from "react";

import { partnership } from "../../constants/partnership";

const Partnership = () => {
  return (
    <>
      <p>Our Partnership </p>
      <ul>
        {partnership.map(({ id, logo }) => {
          return (
            <li key={id}>
              <img src={logo} alt="partner logo" />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Partnership;
