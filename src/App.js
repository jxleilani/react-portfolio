import React from 'react'
import './App.css'
import Wrapper from './components/Wrapper'
import Menu from './components/Menu'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <Wrapper>
      <Menu />

        <nav className="nav">
          <ul>
            <li className="nav-link">Home</li>
            <li className="nav-link">About</li>
            <li className="nav-link">Portfolio</li>
            <li className="nav-link">Experience</li>
            <li className="nav-link">Education</li>
            <li className="nav-link">Contact</li>
          </ul>
        </nav>

        <Hero />
        <About />
        <Portfolio />
        <Experience />
        <Education />
        <Contact />
        <Footer />
    </Wrapper>
  );
}

export default App;
