import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuToggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsActive(false); // Ensure menu is closed by default on larger screens
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize on mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="nav-text-main">Keefe Reeves</span>
        <a href="https://github.com/Keefereeves1" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="github-icon" />
        </a>
      </div>
      <div className={isActive ? 'menu-toggle active' : 'menu-toggle'} onClick={handleMenuToggle}>
        <div className="hamburger">
          <div className={isActive ? 'line line-1 active' : 'line line-1'}></div>
          <div className={isActive ? 'line line-2 active' : 'line line-2'}></div>
          <div className={isActive ? 'line line-3 active' : 'line line-3'}></div>
        </div>
      </div>
      <ul className={isActive ? 'nav-links active' : 'nav-links'} id="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={handleMenuToggle}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" onClick={handleMenuToggle}>About</Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link" onClick={handleMenuToggle}>Projects</Link>
        </li>
        <li className="nav-item">
          <a href="/Contact" className="nav-link" onClick={handleMenuToggle}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
