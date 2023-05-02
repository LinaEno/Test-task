import * as React from "react";
import { Link } from "gatsby";
import Logo from "../../images/logo.svg";
import { Header, LogoLink } from "./Navbar.styled";

const Navbar = () => {
  return (
    <Header>
      <div>
        <a>
          <img src={Logo} alt="Logo" />
          <LogoLink>Hounter</LogoLink>
        </a>
      </div>
      <div>
        <nav>
          <Link>About Us</Link>
          <Link>Article</Link>
          <Link>Property</Link>
        </nav>
        <button type="submit">Sign Up!</button>
      </div>
    </Header>
  );
};

export default Navbar;
