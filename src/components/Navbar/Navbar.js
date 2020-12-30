import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li className="nav-link">
          <Link to="/" data-text="Home">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="#about" data-text="About">About</Link>
        </li>
        <li className="nav-link">
          <Link to="#portfolio" data-text="Portfolio">Portfolio</Link>
        </li>
        <li className="nav-link">
          <Link to="#experience" data-text="Experience">Experience</Link>
        </li>
        <li className="nav-link">
          <Link to="#education" data-text="Education">Education</Link>
        </li>
        <li className="nav-link">
          <Link to="#contact" data-text="Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
