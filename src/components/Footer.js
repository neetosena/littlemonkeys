import React from "react";

const Footer = () => {
  return (
    <footer className="footer-conteiner">
      <div className="footer-inner-container">
        <div className="footer-column">
          <img src="" alt="" />
          <p>
            Play School: <strong>9am - 1pm</strong>
          </p>
          <p>
            After School: <strong>1:30pm - 6pm</strong>
          </p>
        </div>
        <div className="footer-column">
          <p>273, Glasnevin Avenue, Ballymun, Dublin</p>
          <a href="#" className="link">
            (086) 052 7583 (Carol)
          </a>
          <a href="mailto:info@littlemonkeys.ie" className="link">
            info@littlemonkeys.ie
          </a>
        </div>
        <div className="footer-column">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className="footer-inner-container">
          <p>
            © 2022 Little Monkeys, Inc. All Rights Reserved. Design by Neto Sena
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
