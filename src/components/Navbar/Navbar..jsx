import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import { Header, LogoLink } from "./Navbar.styled";

const Navbar = () => {
  return (
    <Header>
      <div>
        <Link>
          <img src={Logo} alt="Logo" />
          <LogoLink>Hounter</LogoLink>
        </Link>
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
