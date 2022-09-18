import React, { useState, useEffect } from "react";
import { heroImages } from "../data/Utils";

const Hero = () => {
  const [index, setIndex] = useState(1);

  useEffect(() => {}, []);

  return (
    <div className="hero-container">
      <span className="title">Welcome to Little Monkeys</span>
      <span className="sub-title">What We Offer: </span>

      <div className="hero-slide">
        {heroImages.map((item) => {
          const { id, image, alt } = item;
          let position = "next-slide";
          if (id === index) {
            position = "actual-slide";
          }
          return <img key={id} className={position} src={image} alt={alt} />;
        })}
      </div>

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
