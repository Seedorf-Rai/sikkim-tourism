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
import CabBanner from "../../../components/cab-banner";
import BikeBanner from "../../../components/bike-banner";

const Homepage = () => {
  return (
    <div className="homepage">
      <HomeHero />
      <Destinations />
      <Activities />
      <Accommodations />
      <CabBanner></CabBanner>
      <Culture />
      <BikeBanner></BikeBanner>
      <Testimonials />
      <TravelTips />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Homepage;
