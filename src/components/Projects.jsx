import React from 'react';

const Projects = () => (
  <section id="projects" className="container mt-5">
    <h2>Projects</h2>
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">Data Analysis on Consumer E-commerce</h5>
        <p className="card-text">Technologies used: Python, Pandas, Matplotlib, Seaborn, Scikit-learn</p>
        <ul>
          <li>Performed comprehensive data cleaning and preprocessing to prepare large datasets for analysis.</li>
          <li>Applied statistical methods and techniques to identify consumer purchasing patterns.</li>
          <li>Developed visualizations to communicate insights effectively, aiding in data-driven decision-making.</li>
        </ul>
        <a href="https://github.com/LAKSHMIPATHI-PATHAGUNTA/Data-analysis-on-consumer-e-commerce" className="btn btn-primary">View Project</a>
      </div>
    </div>
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">E-Mechanic Services using MERN Stack</h5>
        <p className="card-text">Technologies used: MongoDB, Express.js, Node.js, React.js, HTML, CSS</p>
        <ul>
          <li>Built a real-time booking platform for vehicle maintenance services, focusing on user experience and reliability.</li>
          <li>Utilized the MERN stack to ensure scalability and responsiveness, resulting in a robust, full-stack application.</li>
        </ul>
        <a href="https://github.com/LAKSHMIPATHI-PATHAGUNTA/E-Mechanice-Services" className="btn btn-primary">View Project</a>
      </div>
    </div>
  </section>
);

export default Projects;
