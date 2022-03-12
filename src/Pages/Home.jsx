import React from "react";
import HeroSection from "../components/HeroSection";
import Incentives from "../components/Incentives";
import Cta from "../components/Cta";
import Features from "../components/Features";
import Blog from "../components/Blog";
import Integration from "../components/Integration";
import Faq from "../components/Faq";
import Modal from "../components/Modal";

function Home() {
  return (
    <div className="Home">
      <HeroSection />
      <Features />
      <Blog />
      <Cta />
    </div>
  );
}

export default Home;
