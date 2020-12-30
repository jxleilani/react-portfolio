import React from 'react'
import { Link } from 'react-scroll'

function Navbar({ open, setOpen }) {
  const navLinks = {
    about: '#about',
    portfolio: '#portfolio',
    experience: '#experience',
    education: '#education',
    contact: '#contact',
  }

  return (
    <nav className={open ? "nav open" : "nav"} open={open} onClick={() => setOpen(!open)}>
      <ul>
        <li className="nav-link">
          <Link to="/" data-text="Home">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="about" data-text="About">About</Link>
        </li>
        <li className="nav-link">
          <Link to="portfolio" data-text="Portfolio">Portfolio</Link>
        </li>
        <li className="nav-link">
          <Link to="experience" data-text="Experience">Experience</Link>
        </li>
        <li className="nav-link">
          <Link to="education" data-text="Education">Education</Link>
        </li>
        <li className="nav-link">
          <Link to="contact" data-text="Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
