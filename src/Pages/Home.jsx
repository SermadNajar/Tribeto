import React from "react";
import HeroSection from "../components/HeroSection";
import Incentives from "../components/Incentives";
import LatestReviews from "../components/LatestReviews";
import Cta from "../components/Cta";
import Features from "../components/Features";
import Blog from "../components/Blog";
import Integration from "../components/Integration";
import Faq from "../components/Faq";

function Home() {
  return (
    <div className="Home">
      <HeroSection />
      <LatestReviews />
      <Features />
      <Incentives />
      <Integration />
      <Blog />
      <Faq />
      <Cta />
    </div>
  );
}

export default Home;
