import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import {
  ButtonSignUp,
  Header,
  LogoBox,
  LogoLink,
  NavBox,
  NavLink,
  NavList,
} from "./Navbar.styled";

const Navbar = () => {
  return (
    <Header>
      <div>
        <LogoBox>
          <img src={Logo} alt="Logo" />
          <LogoLink>Hounter</LogoLink>
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
            <NavLink>Property</NavLink>
          </li>
        </NavList>
        <ButtonSignUp type="submit">Sign Up!</ButtonSignUp>
      </NavBox>
    </Header>
  );
};

export default Navbar;
