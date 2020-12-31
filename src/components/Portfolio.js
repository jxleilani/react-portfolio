import React from 'react'
import Project from './Project'

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container portfoliocontainer">
        <div className="section-heading">
          <h1>Portfolio</h1>
          <h6>& Recent Projects</h6>
        </div>
        <Project />
      </div>
    </section>
  );
}

export default Portfolio;
