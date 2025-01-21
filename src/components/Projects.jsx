import React from 'react';

const Projects = () => (
  <section id="projects" className="container mt-5">
    <h2>Projects</h2>
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">Library Management System using SQL </h5>
        <ul>
          <li>This Library Management System project uses SQL for handling book records, user management, and transaction details.</li>
          <li>s. It supports functionalities like adding, updating, and deleting books, issuing and returning books, and maintaining user data.</li>
        </ul>
        <a href="https://github.com/LAKSHMIPATHI-PATHAGUNTA/library-management-system-using-sql" className="btn btn-primary">View Project</a>
      </div>
    </div>
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">E-Mechanic Services using MERN Stack</h5>
        <p className="card-text">Technologies used: MongoDB, Express.js, Node.js, React.js, HTML, CSS</p>
        <ul>
          <li>Worked on backend and front-end system which provides features like user registration and role-based access.</li>
          <li>Developed APIs to manage service bookings and track appointments. Created functionalities to handle customer and service provider interactions.</li>
        </ul>
        <a href="https://github.com/LAKSHMIPATHI-PATHAGUNTA/E-Mechanic-Services" className="btn btn-primary">View Project</a>
      </div>
    </div>
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">Food Image Classification Using CNN</h5>
        <p className="card-text">Technologies used: Keras,Tensorflow</p>
        <ul>
          <li>Constructed a deep learning framework using Convolutional Neural Networks (CNNs) for effective classification and identification 
            tasks related to Indian cuisine with a large image dataset exceeding 25,000 images. </li>
          <li>By ensuring quality of images in our dataset and by taking help of pythons rich library we obtained 88 percent accuracy using ResNet101</li>
        </ul>
        <a href="https://github.com/LAKSHMIPATHI-PATHAGUNTA/Food-Recognition-using-Deep-Learning" className="btn btn-primary">View Project</a>
      </div>
    </div>
  </section>
);

export default Projects;
