import React, { useState } from "react";
import { testimonials } from "../data/Utils";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const TestimonialsComp = () => {
  const [slideTestimonials, setSlideTestimonials] = useState(testimonials);
  const [index, setIndex] = useState(0);

  const handlePrevButton = () => {
    if (index === 0) {
      setIndex(slideTestimonials.length - 1);
    } else {
      setIndex((oldIndex) => {
        return oldIndex - 1;
      });
    }
  };
  const handleNextButton = () => {
    if (index >= slideTestimonials.length - 1) {
      setIndex(0);
    } else {
      setIndex((oldIndex) => oldIndex + 1);
    }
  };

  return (
    <div className="testimonialsComp-container">
      <div className="testimonialsComp-container-inner">
        {slideTestimonials.map((item, i) => {
          const { message, name } = item;
          let position = "next-testimonial";
          if (i === index) {
            position = "active-testimonial";
          }
          if (
            i === index - 1 ||
            (index === 0 && i === slideTestimonials.length - 1)
          ) {
            position = "last-testimonial";
          }

          return (
            <div key={i} className={`testimonial-item ${position}`}>
              <p>{message}</p>
              <span>{name}</span>
            </div>
          );
        })}
      </div>
      <button className="prev" onClick={handlePrevButton}>
        <IoIosArrowBack />
      </button>
      <button className="next" onClick={handleNextButton}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default TestimonialsComp;
