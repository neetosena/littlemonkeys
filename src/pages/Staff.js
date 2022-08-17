import React from "react";
import StaffComp from "../components/StaffComp";

const Staff = () => {
  return (
    <div id="staff" className="staff-container">
      <h1>Meet Our Staff</h1>
      <h4>WE ARE ALL HERE TO HELP YOU</h4>
      <p>
        All of our teachers are trained professionals. To ensure the highest
        level of educational opportunity for your children, all of our staff
        members have been carefully selected and are extremely knowledgeable in
        child care and early childhood education. All the staff at Little
        Monkeys are fully Garda vetted and are committed to ongoing training and
        professional development.
      </p>
      <StaffComp />
    </div>
  );
};

export default Staff;
