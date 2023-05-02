import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import FeaturedSection from "../components/FeaturedSection/FeaturedSection";
import ReviewSection from "../components/ReviewSection/ReviewSection";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <ReviewSection />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Hounter</title>;
//  <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&display=swap" rel="stylesheet"></link>;
