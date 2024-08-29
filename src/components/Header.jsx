import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = ({ setActiveSection }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="full-width-navbar">
      <Navbar.Brand href="#" onClick={() => setActiveSection('home')}>
            Lakshmipathi Pathagunta
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav>
          <Nav.Link onClick={() => setActiveSection('about')}>About</Nav.Link>
          <Nav.Link onClick={() => setActiveSection('projects')}>Projects</Nav.Link>
          <Nav.Link onClick={() => setActiveSection('education')}>Educational Details</Nav.Link>
          <Nav.Link onClick={() => setActiveSection('skills')}>Skills</Nav.Link>
          <Nav.Link onClick={() => setActiveSection('add')}>Additional Info</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
