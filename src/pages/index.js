import * as React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import FeaturedSection from "../components/FeaturedSection/FeaturedSection";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedSection />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Hounter</title>;
// export const HeadLink = () => <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&display=swap" rel="stylesheet"></link>;
