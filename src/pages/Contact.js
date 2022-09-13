import React from "react";
import FormComp from "../components/FormComp";
import Map from "../components/Map";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h2>Contact Us</h2>
      <h4>Visit us or drop a line</h4>
      <FormComp />
      <h2>Map</h2>
      <h4>Our Location</h4>
      <Map />
    </div>
  );
};

export default Contact;
