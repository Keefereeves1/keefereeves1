import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="https://github.com/Keefereeves1/keefereeves1" target="_blank" rel="noopener noreferrer" className="footer-link">
          <i className="fab fa-github footer-icon"></i>
          Check out this site's codebase
        </a>
        <a href="https://www.linkedin.com/in/keefereeves" target="_blank" rel="noopener noreferrer" className="footer-link">
          <i className="fab fa-linkedin footer-icon"></i>
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
