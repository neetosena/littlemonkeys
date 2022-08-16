import React from "react";
import { heroImages } from "../data/Utils";

const Hero = () => {
  return (
    <div className="hero-container">
      <h1>Welcome to Little Monkeys</h1>
      <span>What We Offer: </span>

      {heroImages.map((item, index) => {
        const { id, image, alt } = item;
        return <img key={id} src={image} alt={alt} />;
      })}

      <div className="hero-cards-container">
        <div className="hero-card">
          <i></i>
          <h3>Peace of Mind</h3>
          <p>
            Warm, welcoming, safe environment with secure outdoor area, Fully
            trained and vetted staff
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
