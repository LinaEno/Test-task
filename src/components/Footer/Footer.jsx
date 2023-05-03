import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import { LogoLink } from "./Footer.styled";

import Facebook from "../../images/facebook.svg";
import Twitter from "../../images/twitter.svg";
import Instagram from "../../images/instagram.svg";

const Footer = () => {
  return (
    <footer>
      <div>
        <Link>
          <img src={Logo} alt="Logo" />
          <LogoLink>Hounter</LogoLink>
        </Link>
        <p>
          We provide information about properties such as houses, villas and
          apartments to help people find their dream home
        </p>
        <ul>
          <li>
            <Link>
              <img src={Facebook} alt="Facebook icon" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={Twitter} alt="Twitter icon" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={Instagram} alt="Instagram icon" />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <div>
          <p>Property</p>
          <ul>
            <li>
              <Link>House</Link>
            </li>
            <li>
              <Link>Apartment</Link>
            </li>
            <li>
              <Link>Villa</Link>
            </li>
          </ul>
        </div>
        <div>
          <p>Article</p>
          <ul>
            <li>
              <Link>New Article</Link>
            </li>
            <li>
              <Link>Popular Article</Link>
            </li>
            <li>
              <Link>Most Read</Link>
            </li>
            <li>
              <Link>Tips & Tricks</Link>
            </li>
          </ul>
        </div>
        <div>
          <p>Contact</p>
          <address>
            <ul>
              <li>
                <a
                  href="https://goo.gl/maps/dUXZxaFyEbXxV5ks6"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  2464 Royal Ln. Mesa, New Jersey 45463
                </a>
              </li>
              <li>
                <a href="tel:(671) 555-0110">(671) 555-0110</a>
              </li>
              <li>
                <a href="mailto:info@hounter.com">info@hounter.com</a>
              </li>
            </ul>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
