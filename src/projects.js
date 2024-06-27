// Projects.js
import React, { useState } from 'react';
import './projects.css';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
const Projects = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  const handleArrowClick = (section) => {
    setActiveSection(section);
    document.body.style.overflow = 'hidden';
  };

  const handleBackClick = () => {
    setActiveSection(null);
    document.body.style.overflow = 'auto';
  };

  const handleImageClick = (src) => {
    setLightboxImage(src);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const handleDownloadForKernelDoc = () => {
    const link = document.createElement('a');
    link.href = '/LispUnixKernel.docx';
    link.download = 'LispUnixKernel.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const images = {
    anymodel: [
      "/anymodelpic1.png",
      "/anymmodelpic2.png",
      "/anymodelpic3.png",
      "/anymodelpic4.png"
    ],
    project2: [
      "/deliverypic1.png", 
      "/deliverypic2.png",
      "/deliverypic3.png",
      "/deliverypic4.png",
    ],
    project3: [] 
  };

  return (
    <div className="projects-container">
      <Navbar />
      <div className="hero" style={{ backgroundImage: 'url(/projectshero.png)' }}>
        <h1>Projects</h1>
      </div>
      <div className="project-sections">
        {activeSection === null ? (
          <>
            <div className="project-section">
              <div className="section-header">
                <h2>AnyModel Project</h2>
                <span className="arrow" onClick={() => handleArrowClick('anymodel')}>&#9654;</span>
              </div>
              <p>
                <strong>"anymodel"</strong> is an advanced AI project tailored specifically for programmers and ethical hackers, aiming to revolutionize coding assistance and ethical hacking practices. At its core, anymodel leverages a cutting-edge, quantized version of CodeGemma 7b I-T, hosted on Modal's platform. This setup ensures efficient performance and accessibility, crucial for handling diverse coding challenges and security tasks. All the planning is complete, aswell as is how to get all the elements to function such as web search and file reading as-well as image reading, however, we are still researching minimizing costs. 
              </p>
              <p>
                <strong>Key Features:</strong><br />
                <strong>Quantized CodeGemma 7b I-T:</strong> Designed for optimal performance on Modal, this version of CodeGemma 7b I-T is finely tuned by Data-Ject Solutions to deliver rapid responses and precise coding assistance.<br />
                <strong>File Upload Capability:</strong> anymodel supports seamless file uploads, enabling users to directly interact with code snippets, projects, or data files, enhancing collaboration and productivity.<br />
                <strong>Focused on Coding Excellence:</strong> With a primary focus on coding tasks, anymodel provides sophisticated tools and models tailored to streamline development processes and enhance code quality.
              </p>
              <p>
                <strong>Advantages Over GPT-4:</strong><br />
                CodeGemma 7b I-T excels over GPT-4 in several key aspects crucial for coding:<br />
                <strong>Specialized Training:</strong> CodeGemma 7b I-T is specifically trained on vast repositories of programming languages, frameworks, and ethical hacking techniques, ensuring precise and contextually accurate responses.<br />
                <strong>Efficiency and Speed:</strong> Leveraging quantization techniques, CodeGemma 7b I-T delivers faster inference times and reduced computational overhead, making it ideal for real-time coding assistance and rapid prototyping.<br />
                <strong>Security and Ethical Hacking Expertise:</strong> Beyond traditional coding support, anymodel incorporates specialized modules for ethical hacking, integrating security best practices and tools into its framework.
              </p>
              <p>
                <strong>Vision:</strong><br />
                anymodel aims to empower programmers and ethical hackers with state-of-the-art AI capabilities, fostering innovation and efficiency in software development and cybersecurity. By combining advanced AI models with practical file handling and specialized functionalities, anymodel sets a new standard for intelligent coding assistance and ethical hacking tools.<br />
                This description outlines anymodel's commitment to excellence in coding and cybersecurity, leveraging the latest advancements in AI to meet the evolving needs of technical professionals.
              </p>
            </div>
            <div className="project-section">
              <div className="section-header">
                <h2>Delivery App Project</h2>
                <span className="arrow" onClick={() => handleArrowClick('project2')}>&#9654;</span>
              </div>
              <p>
                <strong>"Delivery App Project"</strong> is an innovative application currently under development, designed to streamline and enhance the delivery process for businesses and customers alike. This project focuses on providing a seamless and efficient user experience, leveraging the latest technologies and design principles.
              </p>
              <p>
                <strong>Key Features:</strong><br />
                <strong>Real-Time Tracking:</strong> The delivery app offers real-time tracking capabilities, allowing customers to monitor their orders from dispatch to delivery.<br />
                <strong>User-Friendly Interface:</strong> With an intuitive and easy-to-navigate interface, the app ensures a smooth user experience for both businesses and customers.<br />
                <strong>Secure Payment Integration:</strong> The app integrates secure payment gateways, providing customers with a safe and reliable payment process.<br />
                <strong>Customizable Delivery Options:</strong> Businesses can offer a variety of delivery options, catering to different customer needs and preferences.
              </p>
              <p>
                <strong>Advantages Over Competitors:</strong><br />
                The Delivery App Project aims to stand out in the competitive market with:<br />
                <strong>Enhanced Efficiency:</strong> By optimizing delivery routes and automating key processes, the app significantly improves delivery efficiency and reduces operational costs.<br />
                <strong>Comprehensive Analytics:</strong> Businesses can access detailed analytics and reports, helping them make informed decisions and improve their services.<br />
                <strong>Robust Security:</strong> The app employs advanced security measures to protect user data and ensure privacy.<br />
                <strong>Scalability:</strong> Designed to handle varying volumes of deliveries, the app can scale effortlessly to meet the growing demands of businesses.
              </p>
              <p>
                <strong>Vision:</strong><br />
                The Delivery App Project envisions revolutionizing the delivery industry by providing a powerful tool that enhances operational efficiency, customer satisfaction, and business growth. By integrating cutting-edge technology with user-centric design, the app aims to become a benchmark in the delivery service sector.<br />
                This description highlights the commitment of the Delivery App Project to innovation, security, and user satisfaction, setting a new standard in the delivery service landscape.
              </p>
            </div>
            <div className="project-section">
  <div className="section-header">
    <h2>Lisp-Based Unix Kernel Project</h2>
    <span className="arrow" onClick={() => handleArrowClick('project3')}>&#9654;</span>
  </div>
  <p>
    <strong>"Lisp-Based Unix Kernel Project"</strong> is an innovative and ambitious project that is still under development, and experimentation, that aims to push the boundaries of operating system development by leveraging the powerful features of the Lisp programming language. Unlike traditional operating systems written in C or C++, this project explores the unique advantages offered by Lisp, including its macro system, dynamic typing, and garbage collection.
  </p>
  <p>
    <strong>Key Features:</strong><br />
    <strong>Microkernel Architecture:</strong> The kernel is designed with a microkernel architecture, minimizing the amount of code running in privileged mode to enhance security and stability.<br />
    <strong>Memory Management:</strong> Sophisticated garbage collection and memory pooling techniques ensure efficient and secure memory usage.<br />
    <strong>Inter-Process Communication (IPC):</strong> Efficient and secure IPC mechanisms, including message passing, shared memory, and semaphores, facilitate robust communication between processes.<br />
    <strong>Networking Stack:</strong> A high-performance networking stack implemented in C, integrated seamlessly with Lisp components to ensure optimal network communication.<br />
    <strong>Development Environment:</strong> Utilizes modern development tools and platforms, including Quicklisp for dependency management, SBCL for Lisp implementation, and continuous integration pipelines for automated build and testing.
  </p>
  <p>
    <strong>Advantages Over Traditional Systems:</strong><br />
    <strong>Security:</strong> Enhanced by Lisp's memory safety features and the microkernel architecture, reducing the risk of vulnerabilities such as buffer overflows.<br />
    <strong>Maintainability:</strong> Lisp's high level of abstraction and macro system simplify complex tasks, making the codebase easier to maintain and extend.<br />
    <strong>Efficiency:</strong> The project demonstrates that Lisp can be used to create an efficient and responsive operating system, challenging the dominance of traditional languages in this domain.
  </p>
  <p>
    <strong>Vision:</strong><br />
    This project aims to revolutionize operating system design by showcasing the potential of Lisp in systems programming. By creating a secure, efficient, and modular Unix kernel, the project seeks to inspire a new generation of developers to explore alternative languages and architectures, potentially leading to more innovative and secure operating systems in the future.
  </p>
</div>

          </>
        ) : (
          <div className="popup">
            <button className="back-button" onClick={handleBackClick}>Back</button>
            <div className={`popup-images ${activeSection}`}>
              {images[activeSection].map((src, index) => (
                <img key={index} src={src} alt={`${activeSection} Project`} onClick={() => handleImageClick(src)} />
              ))}
              {activeSection === 'project3' && (
                <div className="project3-actions">
                  <button className="download-button" onClick={handleDownloadForKernelDoc}>
                    <FontAwesomeIcon icon={faDownload} /> Download Document
                  </button>
                  <a href="https://github.com/Keefereeves1/Lisp-Unix-Like-Kernel" target="_blank" rel="noopener noreferrer" className="github-button">
                    <FontAwesomeIcon icon={faGithub} /> View on GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
        {lightboxImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <img src={lightboxImage} alt="Enlarged view" className="lightbox-image" />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;

