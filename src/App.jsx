import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './routes/Home';
import About from './routes/About';
import Skills from './routes/Skills';
import Education from './routes/Education';
import Contact from './routes/Contact';
import Project from './routes/Project';
import { Route, Routes } from "react-router-dom";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </>
  );
}

export default App;
