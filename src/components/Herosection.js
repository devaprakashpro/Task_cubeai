import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Welcome to My Company</h1>
        <p>Your success starts here.</p>
        <a href="#features" className="cta">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
