// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from './home';
import About from './About';
import Projects from './projects';
import Contact from './Contact';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;


