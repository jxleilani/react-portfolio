import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css'
import Wrapper from './components/Wrapper'
import Menu from './components/Menu'
import Navbar from './components/Navbar/Navbar.js'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper open={open} setOpen={setOpen} >
      <Router>
        <Menu open={open} setOpen={setOpen} />
        <Navbar open={open} setOpen={setOpen} />
        <Route />
        <Hero />
        <About />
        <Portfolio />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </Router>
    </Wrapper>
  );
}

export default App;
