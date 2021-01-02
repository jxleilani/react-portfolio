import React from 'react'
import Project from './Project'


function Portfolio() {
  return (
    <div>
    <section className="portfolio" id="portfolio" style={{margin: "-30rem 0 4rem"}}>
      <div className="container portfoliocontainer">
        <div className="section-heading">
          <h1>Portfolio</h1>
          <h6>& Recent Projects</h6>
        </div>
        <Project />
      </div>
    </section>
    </div>
  );
}

export default Portfolio;
