import React from "react";
import { staff } from "../data/Utils";

const StaffComp = () => {
  return (
    <div className="staffComp-container">
      {staff.map((item, index) => {
        const { name, image, department, level } = item;

        return (
          <div key={index} className="staffComp-item">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            {department.map((dept, index) => (
              <p key={index}>{dept}</p>
            ))}

            {level.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default StaffComp;
