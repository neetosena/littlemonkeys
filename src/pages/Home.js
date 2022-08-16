import React from "react";
import Hero from "../components/Hero";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Services from "./Services";
import Staff from "./Staff";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Staff />
      <About />
      <Services />
      <Testimonials />
      <Gallery />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
