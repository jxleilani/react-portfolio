import React from 'react'
import { Link } from 'react-router-dom'
import LinkScroll from '../LinkScroll'

function Navbar({ open, setOpen }) {
  return (
    <nav className={open ? "nav open" : "nav"} open={open} onClick={() => setOpen(!open)}>
      <ul>
        <li className="nav-link">
          <Link to="/react-portfolio" data-text="Home" open={open} setOpen={setOpen}>Home</Link>
        </li>
        <li className="nav-link">
          <LinkScroll open={open} setOpen={setOpen} to={"about"} dataText={"About"} />
        </li>
        <li className="nav-link">
          <Link to="/portfolio" data-text="Portfolio" open={open} setOpen={setOpen}>Portfolio</Link>
        </li>
        <li className="nav-link">
          <LinkScroll to={"experience"} dataText={"Experience"} open={open} setOpen={setOpen} />
        </li>
        <li className="nav-link">
          <LinkScroll to={"education"} dataText={"Education"} open={open} setOpen={setOpen} />
        </li>
        <li className="nav-link">
          <LinkScroll to={"contact"} dataText={"Contact"} open={open} setOpen={setOpen} />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
