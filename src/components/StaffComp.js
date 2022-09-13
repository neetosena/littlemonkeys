import React, { useState, useEffect } from "react";
import { staff } from "../data/Utils";

const StaffComp = () => {
  const [slide, setSlide] = useState(staff);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // let interval = setInterval(() => {
    //   console.log(slide.length);
    //   setIndex((oldIndex) => {
    //     if (oldIndex === slide.length - 1) {
    //       return (oldIndex = 0);
    //     }
    //     return oldIndex + 1;
    //   });
    // }, 2000);
    // return () => clearTimeout(interval);
  }, []);

  const handleClick = (i) => {
    setIndex(i);
  };

  return (
    <div className="staffComp-container">
      <div className="staffComp-inner-container">
        {slide.map((item, i) => {
          const { name, image, department, level } = item;

          let position = "hidden";

          if (index === i) {
            console.log(index);
            position = "activeSlide";
          }

          return (
            <div key={i} className={`staffComp-item ${position}`}>
              <img src={image} alt={name} />
              <h3>{name}</h3>
              {department.map((dept, i) => (
                <p key={i}>{dept}</p>
              ))}

              {level.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          );
        })}
      </div>
      <div className="staffComp-bullet-container">
        {slide.map((__, i) => {
          return (
            <button
              key={i}
              type="button"
              className={`btn-slide ${index === i && "active"}`}
              onClick={() => handleClick(i)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default StaffComp;
