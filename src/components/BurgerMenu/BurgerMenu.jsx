import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Hamburger, MenuLinks, Nav } from "./BurgerMenu.styled";
import { ButtonSignUp, LogoBox, LogoLink } from "../Navbar/Navbar.styled";
import Logo from "../../images/logo.svg";
import { ReactComponent as Arrow } from "../../images/arrow-down.svg";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

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
        <Link>
          Property
          <Arrow />
        </Link>
        <ButtonSignUp type="submit">Sign Up!</ButtonSignUp>
      </MenuLinks>
    </Nav>
  );
};

export default BurgerMenu;
