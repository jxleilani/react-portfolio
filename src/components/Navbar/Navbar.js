import React from 'react'
import { Link } from 'react-router-dom'
import LinkScroll from '../LinkScroll'

function Navbar({ open, setOpen }) {
  return (
    <nav className={open ? "nav open" : "nav"} open={open} onClick={() => setOpen(!open)}>
      <ul>
        <li className="nav-link">
          <Link to="/" data-text="Home" onClick={() => setOpen(!open)}>Home</Link>
        </li>
        <li className="nav-link">
          <LinkScroll open={open} setOpen={setOpen} to={"about"} dataText={"About"} />
        </li>
        <li className="nav-link">
          <Link to="/portfolio" data-text="Portfolio" onClick={() => setOpen(!open)}>Portfolio</Link>
        </li>
        <li className="nav-link">
          <LinkScroll to={"experience"} dataText={"Experience"} onClick={() => setOpen(!open)} />
        </li>
        <li className="nav-link">
          <LinkScroll to={"education"} dataText={"Education"} onClick={() => setOpen(!open)} />
        </li>
        <li className="nav-link">
          <LinkScroll to={"contact"} dataText={"Contact"} onClick={() => setOpen(!open)} />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
