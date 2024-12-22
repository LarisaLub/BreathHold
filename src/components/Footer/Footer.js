import React from 'react';
import './Footer.scss'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        <nav>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;