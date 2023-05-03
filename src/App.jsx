import Navbar from "./components/Navbar/Navbar.";
import HeroSection from "./components/HeroSection/HeroSection";
import FeaturedSection from "./components/FeaturedSection/FeaturedSection";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import ArticleSection from "./components/ArticleSection/ArticleSection";
import SubscribeSection from "./components/SubscribeSection/SubscribeSection";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <ReviewSection />
      <ArticleSection />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default App;
