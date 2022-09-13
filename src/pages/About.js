import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-inner-container">
        <h2>About Us</h2>
        <h4>What's Our Goal</h4>
        <p>
          Little Monkeys offers a Play School and After School service in the
          Glasnevin, Finglas, Meakstown, Charlestown and Ballymun area. We
          started with one unit on Glasnevin Avenue before expanding to two
          directly across the road from us. We have been servicing families in
          the Dublin 11 and Dublin 9 region for over 7 years. When we opened on
          Glasnevin Avenue in Finglas, the parents quickly took us into their
          hearts and have greatly supported us since. Our unique and creative
          based approach to early learning stimulates and engages the child in a
          fun and effective way. We love investing our energy, time and passion
          into children and enjoy nothing more than watching and helping them in
          their development. So if you are looking for a playschool or after
          school in Finglas, Ballymun or Glasnevin. that helps your child grow
          into the wonderful person that they are, come to Little Monkeys
          Glasnevin.
        </p>
      </div>

      <div className="about-inner-container">
        <h2>A Message from Carol</h2>
        <p>
          Little Monkeys was founded in August 2013. As a mother of four, I
          wanted to combine motherhood with my enjoyment of seeing children
          learn, grow and progress while becoming ready to start “big school”.
          We opened with 2 staff and availability for 11 children, but only five
          children enrolled, one of which was my own son. The business grew
          quickly and over the Easter holidays in 2017 we expanded to cater for
          22 children and an extra staff member. With the business continuing to
          grow in 2017 we bought the premises across the road and established a
          setting for 30 preschool children and 22 afterschool children, and we
          now have a staff of 8. My aim for all the children attending Little
          Monkeys is to work with them to make friends, develop skills, learn
          about the world and understand their emotions. I want them to leave us
          feeling happy, confident, and excited about what comes next. Carol
          English
        </p>
      </div>
      <Link to="/contact" className="btn">
        Contact us to learn more
      </Link>
    </div>
  );
};

export default About;
