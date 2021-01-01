import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css'
import Wrapper from './components/Wrapper'
import Main from './components/Main'
import Menu from './components/Menu'
import Navbar from './components/Navbar/Navbar.js'

import Portfolio from './components/Portfolio'

import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper open={open} setOpen={setOpen} >
      <Router>
        <Menu open={open} setOpen={setOpen} />
        <Navbar open={open} setOpen={setOpen} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/" component={Main} />
  
        <Contact />
        <Footer />
      </Router>
    </Wrapper>
  );
}

export default App;
