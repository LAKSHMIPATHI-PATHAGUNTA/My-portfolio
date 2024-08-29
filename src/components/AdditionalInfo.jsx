import React from 'react';
import Certifications from './Certifications.jsx';
import Profiles from './Profiles.jsx';
import Contact from './Contact.jsx'
const Add = () => (
  <section id="resume" className="container mt-5">
    <h2>Additional Info</h2>
    <Certifications />
    <Contact />
    <Profiles />
  </section>
);

export default Add;
