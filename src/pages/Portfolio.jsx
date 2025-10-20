import React from "react";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <h1>Portfolio</h1>
        <p>Some of our recent projects showcasing design and functionality.</p>

        <div className="portfolio-grid">
          <div className="portfolio-item">Project 1</div>
          <div className="portfolio-item">Project 2</div>
          <div className="portfolio-item">Project 3</div>
          <div className="portfolio-item">Project 4</div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
