import {
  HeroInput,
  HeroInputButton,
  HeroInputImg,
  HeroLabel,
} from "../HeroSection/HeroSection.styled";

import Email from "../../images/email.svg";

const SubscribeSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <h2>Subscribe For More Info and update from Hounter</h2>
      <form onSubmit={handleSubmit}>
        <HeroLabel>
          <HeroInputImg src={Email} alt="Place icon" />
          <HeroInput
            type="email"
            placeholder="Your email here"
            pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
            required
          />
          <HeroInputButton>Subsribe Now</HeroInputButton>
        </HeroLabel>
      </form>
    </section>
  );
};

export default SubscribeSection;
