import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Add from './components/AdditionalInfo';
import Education from './components/Education';
import Skills from './components/Skills';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'add':
        return <Add />;
      case 'education':
        return <Education />;
      case 'skills':
        return <Skills />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header setActiveSection={setActiveSection} />
      <div className="content">{renderSection()}</div>
    </>
  );
};

export default App;
