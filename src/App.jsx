import { Helmet } from "react-helmet";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import TourSection from "./components/TourSection/TourSection";
import FeaturedSection from "./components/FeaturedSection/FeaturedSection";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import ArticleSection from "./components/ArticleSection/ArticleSection";
import SubscribeSection from "./components/SubscribeSection/SubscribeSection";
import Footer from "./components/Footer/Footer";
import { Container } from "./components/HeroSection/HeroSection.styled";

const App = () => {
  return (
    <>
      <Helmet>
        <meta property="og:image" content="/public/house3.jpg" />
        <meta name="og:email" content="linabudkova35@gmail.com" />
        <meta
          property="og:description"
          content="Find the place to live your dreams
          easily here"
        />
        <meta property="og:title" content="Hounter" />
        <meta name="title" content="Hounter" />
        <meta
          name="description"
          content="Find the place to live your dreams
          easily here"
        />
      </Helmet>
      <Container>
        <Navbar />
        <HeroSection />
        <FeaturedSection />
        <TourSection />
        <ReviewSection />
        <ArticleSection />
        <SubscribeSection />
        <Footer />
      </Container>
    </>
  );
};

export default App;
