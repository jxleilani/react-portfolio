import React from "react";

function Education() {
  return (
    <section className="education" id="education">
      <div className="container">
        <div className="section-heading">
          <h1>Education</h1>
        </div>
        <div className="edu-details">
          <p className="edu-desc">
            <span className="degree">
              <em>Certificate, Bootcamp</em>
            </span>
            <br />
            <strong>Full Stack Development</strong>
            <br />
            <em>
              <span style={{ color: "#9c9c9c" }}>currently attending</span>
            </em>
          </p>
          <p className="edu-desc">
            <em>
              <span className="degree">Master of Science:</span>
            </em>
            <br />
            <strong>Information Technology</strong>
            <br />
            <em>
              <span style={{ color: "#9c9c9c" }}>completion date: 2022</span>
            </em>
          </p>
          <p className="edu-desc">
            <em>
              <span className="degree">Bachelor of Science:</span>
            </em>
            <br />
            <strong>Major:</strong> Economics
            <br />
            <strong>Minor:</strong> Information Technology
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
