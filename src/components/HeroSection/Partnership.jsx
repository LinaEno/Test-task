import { Link } from "react-router-dom";

import { partnership } from "../../constants/partnership";

import { PartnershipList, PartnershipTitle } from "./HeroSection.styled";

const Partnership = () => {
  return (
    <>
      <PartnershipTitle>Our Partnership </PartnershipTitle>
      <PartnershipList>
        {partnership.map(({ id, logo }) => {
          return (
            <li key={id}>
              <Link>
                <img src={logo} alt="partner logo" />
              </Link>
            </li>
          );
        })}
      </PartnershipList>
    </>
  );
};

export default Partnership;
