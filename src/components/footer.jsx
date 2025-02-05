import React from 'react';
import Navbar from "./navbar";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__body">
          <div className="footer__nav">
            <Navbar />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
