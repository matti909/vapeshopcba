import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import ResponsibleMarketing from "../components/ResponsibleMarketing";
import SocialSection from "../components/SocialSection";
import Newsletter from "../components/Newsletter";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <ResponsibleMarketing />
      <SocialSection />
      <Newsletter />
    </div>
  );
};

export default HomePage;

