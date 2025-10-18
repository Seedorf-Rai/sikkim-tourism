import HomeHero from "./HomeHero";
import Destinations from "./Destinations";
import Activities from "./Activities";
import Accommodations from "./Accommodations";
import Culture from "./Culture";
import Testimonials from "./Testimonials";
import TravelTips from "./TravelTips";
import Gallery from "./Gallery";
import Footer from "./Footer";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <HomeHero />
      <Destinations />
      <Activities />
      <Accommodations />
      <Culture />
      <Testimonials />
      <TravelTips />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Homepage;
