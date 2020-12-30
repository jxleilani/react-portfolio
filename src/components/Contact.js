import React from "react";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-heading">
          <h1>Contact</h1>
          <h6>& Follow Me!</h6>
        </div>
        <div className="icon-container">
          <span className="icon-item">
            <a
              href="https://linkedin.com/in/jleilani"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </span>
          <span className="icon-item">
            <a
              href="https://github.com/jxleilani"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fab fa-github-square"></i>
            </a>
          </span>
          <span className="icon-item">
            <a href="mailto: jxleilani@gmail.com">
              <i className="fas fa-envelope-square"></i>
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
