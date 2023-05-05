import { ReactComponent as Arrow } from "../../images/arrow-down.svg";
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
import { Default, Mobile } from "../Media/Media";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Navbar = () => {
  return (
    <Header>
      <Mobile>
        <BurgerMenu />
      </Mobile>
      <Default>
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
              <NavLink>
                Property
                <Arrow />
              </NavLink>
            </li>
          </NavList>
          <ButtonSignUp type="submit">Sign Up!</ButtonSignUp>
        </NavBox>
      </Default>
    </Header>
  );
};

export default Navbar;
