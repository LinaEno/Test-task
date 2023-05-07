import { useState } from "react";
import useScrollDisable from "../../hooks/useScrollDisable";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import { ReactComponent as Arrow } from "../../images/arrow-down.svg";
import { ReactComponent as HouseIcon } from "../../images/house-fill.svg";
import { ReactComponent as VillaIcon } from "../../images/ic_round-villa.svg";
import { ReactComponent as ApartmentIcon } from "../../images/ic_round-apartment.svg";
import { Box, Hamburger, MenuLinks, Nav } from "./BurgerMenu.styled";
import {
  ButtonSignUp,
  LogoBox,
  LogoLink,
  PropertyLink,
  PropertyList,
} from "../Navbar/Navbar.styled";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const [showList, setShowList] = useState(false);

  const toggleShowList = () => {
    setShowList(!showList);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  useScrollDisable(open);

  return (
    <Nav>
      <LogoBox>
        <img src={Logo} alt="Logo" />
        <LogoLink>Hounter</LogoLink>
      </LogoBox>
      <Box>
        <Hamburger open={open} onClick={handleClick}>
          <div />
          <div />
          <div />
        </Hamburger>
      </Box>
      <MenuLinks open={open}>
        <Link>About Us</Link>
        <Link>Article</Link>
        <Link onClick={toggleShowList}>
          Property
          <Arrow />
        </Link>
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
      </MenuLinks>
    </Nav>
  );
};

export default BurgerMenu;
