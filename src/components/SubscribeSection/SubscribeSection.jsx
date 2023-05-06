import {
  SubInput,
  HeroInputButton,
  HeroInputImg,
  HeroLabel,
} from "../HeroSection/HeroSection.styled";

import Email from "../../images/email.svg";

import sub1 from "../../images/subscribe/subscribe1.png";
import sub2 from "../../images/subscribe/subscribe2.png";
import sub3 from "../../images/subscribe/subscribe3.png";
import sub4 from "../../images/subscribe/subscribe4.png";
import sub5 from "../../images/subscribe/subscribe5.png";
import sub6 from "../../images/subscribe/subscribe6.png";
import sub7 from "../../images/subscribe/subscribe7.png";
import sub8 from "../../images/subscribe/subscribe8.png";
import {
  StyledForm,
  SubImg,
  SubSection,
  SubTitle,
} from "./SubscribeSection.styled";
import { DesktopOnly } from "../Media/Media";

const SubscribeSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SubSection className="subSection">
      <DesktopOnly>
        <SubImg
          src={sub1}
          alt="Subscribe image 1"
          style={{ top: 38, left: 44 }}
        />
        <SubImg
          src={sub2}
          alt="Subscribe image 2"
          style={{ top: 71, left: 204 }}
        />
        <SubImg
          src={sub3}
          alt="Subscribe image 3"
          style={{ top: 173, left: 67 }}
        />
        <SubImg
          src={sub4}
          alt="Subscribe image 4"
          style={{ top: 178, left: 195 }}
        />
        <SubImg
          src={sub5}
          alt="Subscribe image 5"
          style={{ top: 44, right: 200 }}
        />
        <SubImg
          src={sub6}
          alt="Subscribe image 6"
          style={{ top: 107, right: 82 }}
        />
        <SubImg
          src={sub7}
          alt="Subscribe image 7"
          style={{ top: 143, right: 200 }}
        />
        <SubImg
          src={sub8}
          alt="Subscribe image 8"
          style={{ top: 197, right: 73 }}
        />
      </DesktopOnly>
      <SubTitle>Subscribe For More Info and update from Hounter</SubTitle>
      <StyledForm onSubmit={handleSubmit}>
        <HeroLabel>
          <HeroInputImg src={Email} alt="Place icon" />
          <SubInput
            type="email"
            placeholder="Your email here"
            pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
            required
          />
          <HeroInputButton>Subsribe Now</HeroInputButton>
        </HeroLabel>
      </StyledForm>
    </SubSection>
  );
};

export default SubscribeSection;
