import React, { useEffect } from "react";
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
  useEffect(() => {
    // Tawk.to Script
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/66a0b678becc2fed6929c8c7/1i3hshhqr";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <>
      <Navbar />
      <SwiperSlide />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <CenteredScreenshot />
      <br />
      <br />
      <MarketingSection />
      <Popup />
      <Featurette />
      <FrontCard />
      <br /> <br />
      <PricingCards />
      <Footer />
    </>
  );
};

export default Home;
