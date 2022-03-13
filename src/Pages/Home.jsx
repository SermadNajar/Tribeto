import React from "react";
import HeroSection from "../components/Home/HeroSection";
import Cta from "../components/Home/Cta";
import Features from "../components/Home/Features";
import Blog from "../components/Home/Blog";

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
