import React from "react";
import Navbar from "../components/Navbar";
import FrontCard from "../components/FrontCard";
import Footer from "../components/Footer";
import Popup from "../components/Popup";
import CenteredScreenshot from "../components/CenteredScreenshot";
import PricingCards from "../components/PricingCards";
import MarketingSection from "../components/MarketingSection";
import Featurette from "../components/Featurette";

const Home = () => {
  return (
    <>
      <Navbar />
      <FrontCard />
      <MarketingSection />
      <br /> <br />
      <Popup />
      <Featurette />
      <CenteredScreenshot />
      <PricingCards />
      <Footer />
    </>
  );
};

export default Home;
