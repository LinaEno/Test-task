import { useState } from "react";

import { Default, Mobile } from "../Media/Media";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Logo from "../../images/logo.svg";
import { ReactComponent as Arrow } from "../../images/arrow-down.svg";
import { ReactComponent as HouseIcon } from "../../images/house-fill.svg";
import { ReactComponent as VillaIcon } from "../../images/ic_round-villa.svg";
import { ReactComponent as ApartmentIcon } from "../../images/ic_round-apartment.svg";

import {
  ButtonSignUp,
  Header,
  LogoBox,
  LogoLink,
  NavBox,
  NavLink,
  NavList,
  PropertyLink,
  PropertyList,
} from "./Navbar.styled";

const Navbar = () => {
  const [showList, setShowList] = useState(false);

  const toggleShowList = () => {
    setShowList(!showList);
  };

  return (
    <Header>
      <Mobile>
        <BurgerMenu />
      </Mobile>
      <Default>
        <div>
          <LogoBox>
            <img src={Logo} alt="Logo" />
            <LogoLink id="logo">Hounter</LogoLink>
          </LogoBox>
        </div>
        <NavBox>
          <NavList>
            <li>
              <NavLink>About Us</NavLink>
            </li>
            <li>
              <NavLink>Article</NavLink>
            </li>
            <li>
              <NavLink onClick={toggleShowList}>
                Property
                <Arrow />
              </NavLink>
            </li>
          </NavList>
          {showList && (
            <PropertyList>
              <li>
                <PropertyLink>
                  <HouseIcon height={18} width={18} />
                  House
                </PropertyLink>
              </li>
              <li>
                <PropertyLink>
                  <VillaIcon height={18} width={18} />
                  Villa
                </PropertyLink>
              </li>
              <li>
                <PropertyLink>
                  <ApartmentIcon height={18} width={18} />
                  Apartment
                </PropertyLink>
              </li>
            </PropertyList>
          )}
          <ButtonSignUp type="submit">Sign Up!</ButtonSignUp>
        </NavBox>
      </Default>
    </Header>
  );
};

export default Navbar;
