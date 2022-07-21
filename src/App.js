import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Error from './pages/Error';

import Home_fr from './pages/Home_fr';
import About_fr from './pages/About_fr';
import Projects_fr from './pages/Projects_fr';
import Contact_fr from './pages/Contact_fr';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio-website" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />

        <Route path="/home_fr" element={<Home_fr />} />
        <Route path="/about_fr" element={<About_fr />} />
        <Route path="/projects_fr" element={<Projects_fr />} />
        <Route path="/contact_fr" element={<Contact_fr />} />
      </Routes></BrowserRouter>

  );
};

export default App;