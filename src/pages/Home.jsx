import React from "react";
import Navbar from "../components/Navbar";
import FrontCard from "../components/FrontCard";
import Footer from "../components/Footer";
import Popup from "../components/Popup";
import CenteredScreenshot from "../components/CenteredScreenshot";
import PricingCards from "../components/PricingCards";
import MarketingSection from "../components/MarketingSection";
import Featurette from "../components/Featurette";
import SwiperSlide from "../components/SwiperSlide";

const Home = () => {
  return (
    <>
      <Navbar />
      <SwiperSlide />
      <CenteredScreenshot />
      <FrontCard />
      <MarketingSection />
      <br /> <br />
      <Popup />
      <Featurette />
      <PricingCards />
      <Footer />
    </>
  );
};

export default Home;
