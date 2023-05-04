import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import {
  FooterBox,
  FooterDesc,
  LogoLink,
  SocialList,
  NavBox,
  NavTitle,
  NavLink,
  NavList,
  ContactLink,
  NavItem,
  NavItemContact,
  SocialLink,
} from "./Footer.styled";
import { LogoBox } from "../Navbar/Navbar.styled";

import { ReactComponent as Facebook } from "../../images/facebook.svg";
import { ReactComponent as Twitter } from "../../images/twitter.svg";
import { ReactComponent as Instagram } from "../../images/instagram.svg";

const Footer = () => {
  return (
    <FooterBox>
      <div>
        <LogoBox>
          <img src={Logo} alt="Logo" />
          <LogoLink>Hounter</LogoLink>
        </LogoBox>
        <FooterDesc>
          We provide information about properties such as houses, villas and
          apartments to help people find their dream home
        </FooterDesc>
        <SocialList>
          <li>
            <SocialLink>
              <Facebook className="social__svg" />
            </SocialLink>
          </li>
          <li>
            <SocialLink>
              <Twitter className="social__svg" />
            </SocialLink>
          </li>
          <li>
            <SocialLink>
              <Instagram className="social__svg" />
            </SocialLink>
          </li>
        </SocialList>
      </div>
      <NavBox>
        <div>
          <NavTitle>Property</NavTitle>
          <NavList>
            <li>
              <NavLink>House</NavLink>
            </li>
            <li>
              <NavLink>Apartment</NavLink>
            </li>
            <li>
              <NavLink>Villa</NavLink>
            </li>
          </NavList>
        </div>
        <div>
          <NavTitle>Article</NavTitle>
          <NavList>
            <NavItem>
              <NavLink>New Article</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Popular Article</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Most Read</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Tips & Tricks</NavLink>
            </NavItem>
          </NavList>
        </div>
        <div>
          <NavTitle>Contact</NavTitle>
          <address>
            <NavList>
              <NavItemContact>
                <ContactLink
                  href="https://goo.gl/maps/dUXZxaFyEbXxV5ks6"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  2464 Royal Ln. Mesa, New Jersey 45463
                </ContactLink>
              </NavItemContact>
              <NavItemContact>
                <ContactLink href="tel:(671) 555-0110">
                  (671) 555-0110
                </ContactLink>
              </NavItemContact>
              <NavItemContact>
                <ContactLink href="mailto:info@hounter.com">
                  info@hounter.com
                </ContactLink>
              </NavItemContact>
            </NavList>
          </address>
        </div>
      </NavBox>
    </FooterBox>
  );
};

export default Footer;
