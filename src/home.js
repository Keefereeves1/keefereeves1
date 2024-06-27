import React from 'react';
import './home.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Keefe_Reeves_Resume.pdf';
    link.download = 'Keefe_Reeves_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="hero">
        <div className="hero-text">
          <h1>Keefe Reeves</h1>
          <p className="hero-undertitle">Full-Stack Developer, Ethical Hacker, Tech Enthusiast</p>
        </div>
      </div>
      <div className="profile-section">
        <div className="profile-picture">
          <img src="/profile.png" alt="Keefe Reeves" />
        </div>
        <div className="description">
          <p>
            I am an Ethical hacker, Web Developer and a Software Engineer with a passion for
            creating secure and efficient applications. I'm also the CEO and sole founder of Data-Ject Solutions, a cybersecurity and software development company focused on AI, Software/Web Development, and Penetration Testing.
          </p>
        </div>
      </div>
      <div className="hover-effects">
        <button className="fancy-button" onClick={handleDownload}>
          Download My Resume
        </button>
      </div>
      <div className="sliding-elements">
        <div className="slide">
          <div class="slide-content"></div>
          <h3>Technical Skills in Unix and Unix-Like Systems</h3>
          <p>
            I am knowledgeable and passionate about working on Unix and Unix-like systems such as MacOS and Linux distributions. I am proficient in terminal commands, for zsh in MacOS and Bash in Linux.
          </p>
        </div>
        
        <div className="slide">
          <h3>Founder and CEO of <br />
          Data-Ject Solutions</h3>
          <p>
            I am the Founder of Data-Ject Solutions, we are currently working on a project called the anymodel which is an AI chat model for Software Developers and CyberSecurity Enthusiasts
            <br />
            <a href="https://www.data-ject.com" target="_blank" rel="noopener noreferrer">www.data-ject.com</a>
          </p>
        </div>
        <div className="slide">
          <h3>Experienced in <br /> Web Development</h3>
          <p>I have been Web Developing for 3 years, and am fluid in many Frameworks for website development such as Django, React, and Springboot</p>
        </div>
        <div className="slide">
          <h3>Ethical Hacker</h3>
          <p>Firm understanding in ethically hacking, and exploiting systems. I know how to create detailed reports on vulnerabilities for the engineers in red team operations, as well as patching various vulnerabilities</p>
        </div>
        <div className="slide">
          <h3>Back-End Development</h3>
          <p>Great at engineering databases, and back-end admin functions for the front-end stack on projects. Skilled at Python, Java and C-Languages</p>
        </div>
        <div className="slide">
          <h3>Good Communicator</h3>
          <p>I have well versed social skills, and I find it important to communicate back and fourth between management as a worker to ensure that everything is getting done up to par</p>
        </div>
        <div className="slide">
          <h3>Experienced IOS and Android app developer</h3>
          <p>I have developed full fledge applications for both IOS and Android written in flutter. This app also has a live backend made from python.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
