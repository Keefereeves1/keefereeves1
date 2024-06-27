import React, { useEffect } from 'react';
import './About.css';
import Navbar from './Navbar';
import Footer from './Footer';
const sections = [
    {
      title: "About Me",
      content: "Throughout my journey in technology, I've continually sought to merge my passion for cybersecurity with my skills in web and software development. As the CEO and sole founder of Data-Ject Solutions, I've dedicated myself to creating applications that are not only secure and efficient but also push the boundaries of what's possible with AI and innovative web solutions. My role as an Ethical Hacker allows me to understand and mitigate vulnerabilities, ensuring that the digital world becomes a safer place for everyone. Each day, I strive to blend creativity with technical expertise, driven by the belief that robust software can truly make a difference.",
      img: "/DilbertEsque.png",
      className: ""
    },
    {
      title: "Technical Skills",
      content: "My proficiency spans a wide array of programming languages and frameworks, including Python, Java, C-Languages, Django, React, and Springboot. This diverse skill set allows me to approach problems from multiple angles and develop comprehensive solutions. Additionally, my strong command over Unix and Unix-like systems, such as macOS and Linux, enables me to navigate and optimize these environments with ease. My journey through these technologies has been fueled by a relentless curiosity and a desire to continually improve and innovate. Whether I'm coding a new feature or troubleshooting a complex issue, I bring a depth of knowledge and a passion for excellence to every project I undertake.",
      img: "/technicalskills.png",
      className: "right-image"
    },
    {
      title: "Career Highlights",
      content: "As the Founder and CEO of Data-Ject Solutions, I've had the privilege of leading numerous innovative projects. One of the highlights of my career has been working on developing 'anymodel', this project is still underway, and is planned to be hosted on Modal and were using our own custom and qunatized version of the CodeGemma Model, an AI chat model designed specifically for software developers and cybersecurity enthusiasts. This project reflects my commitment to pushing the boundaries of technology and providing valuable tools to the tech community. Leading Data-Ject Solutions has allowed me to combine my technical expertise with my leadership skills, driving forward projects that make a tangible impact. Each initiative we undertake is a testament to our dedication to excellence and innovation in the fields of AI and cybersecurity.",
      img: "/leader.png",
      className: ""
    },
    {
      title: "Notable Projects",
      content: "My journey in mobile application development has been both challenging and rewarding. I've successfully developed full-fledged applications for both iOS and Android using Flutter, with robust live backends written in Python. This experience has deepened my appreciation for creating seamless and responsive user experiences. Additionally, my extensive background in web development has equipped me with the skills to build robust and scalable applications. Each project is an opportunity to blend creativity with technical precision, ensuring that the end product not only meets but exceeds user expectations. My goal is to continue pushing the envelope in mobile and web development, delivering high-quality, innovative solutions, Were still working out details of what the client would like in the application. It is a delivery application, and it comes with some challenges such as connections with business, and havnt decided the amount of funcitonal requirements and level of sophistications. However the basics of the app and backend server is completely developed",
      img: "/notableprojects.png",
      className: "right-image"
    },
    {
      title: "Beyond Work",
      content: "I take great pride in my well-honed social skills, which enable me to foster effective communication between management and team members. I believe that clear and open dialogue is the cornerstone of successful collaboration and project execution. Moreover, I am deeply committed to continuous learning and staying abreast of the latest advancements in technology. This passion for knowledge drives me to constantly evolve and adapt, ensuring that I bring the most current and innovative solutions to every project. My dedication to both personal growth and team synergy allows me to thrive in dynamic environments and contribute meaningfully to any organization.",
      img: "/beyondwork.png",
      className: ""
    }
  ];

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.section');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-container">
      <Navbar />
      {sections.map((section, index) => (
        <div key={index} className={`section ${section.className}`}>
          <img src={section.img} alt={`Section ${index + 1}`} className="section-image" />
          <div className="section-content">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default About;
