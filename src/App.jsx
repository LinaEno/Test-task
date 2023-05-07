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
