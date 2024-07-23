import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/Herosection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import "./";

const Landingpage = () => {
  return (
    <div className="Landingpage">
      <Header />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
};

export default Landingpage;
