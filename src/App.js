import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import About from "./pages/About";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import WhatIDo from "./pages/WhatIDo";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="what_i_do" element={<WhatIDo/>} />
          <Route path="skills" element={<Skill />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
