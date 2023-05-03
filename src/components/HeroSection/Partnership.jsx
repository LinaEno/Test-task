import { PartnershipList, PartnershipTitle } from "./HeroSection.styled";

import { partnership } from "../../constants/partnership";

const Partnership = () => {
  return (
    <>
      <PartnershipTitle>Our Partnership </PartnershipTitle>
      <PartnershipList>
        {partnership.map(({ id, logo }) => {
          return (
            <li key={id}>
              <img src={logo} alt="partner logo" />
            </li>
          );
        })}
      </PartnershipList>
    </>
  );
};

export default Partnership;
