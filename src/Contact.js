import React, { useState, useEffect } from 'react';
import './Contact.css';
import Footer from './Footer';

const Contact = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ["section1", "section2", "section3"];

  const scrollToSection = (index) => {
    setCurrentSection(index);
    document.getElementById(sections[index]).scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
    };
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll, { passive: false });
    };
  }, []);

  return (
    <div className="contact-container">
      {sections.map((section, index) => (
        <div
          key={section}
          id={section}
          className={`contact-section ${currentSection === index ? 'in-view' : ''}`}
        >
          {index === 0 && (
            <>
              <i className="icon fas fa-phone"></i>
              <h2>Phone</h2>
              <button className="contact-button" onClick={() => window.location.href = 'tel:+19023211211'}>
                +1-902-321-1211
              </button>
            </>
          )}
          {index === 1 && (
            <>
              <i className="icon fas fa-envelope"></i>
              <h2>Email</h2>
              <button className="contact-button" onClick={() => window.location.href = 'mailto:reeveskeefe@gmail.com?subject=Job/Hire'}>
                reeveskeefe@gmail.com
              </button>
            </>
          )}
          {index === 2 && (
            <>
              <i className="socialmediaicon icon fa-solid fa-user-plus"></i>
              <h2 className="socialmedia">Social Media</h2>
              <button className="contact-button">
                <i className="fa-solid fa-share-nodes"></i>
                <a className="linkedinclass" href="https://www.linkedin.com/in/keefereeves" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </button>
              <button className="contact-button">
                <i className="fa-solid fa-share-nodes"></i>
                <a className="xclass" href="https://x.com/KeefeReeves" target="_blank" rel="noopener noreferrer">X (formerly Twitter)</a>
              </button>
            </>
          )}
          {index > 0 && (
            <button
              className="nav-button up"
              onClick={() => scrollToSection(index - 1)}
            >
              ↑
            </button>
          )}
          {index < sections.length - 1 && (
            <button
              className="nav-button down"
              onClick={() => scrollToSection(index + 1)}
            >
              ↓
            </button>
          )}
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Contact;





