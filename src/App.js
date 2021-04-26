import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </>
  );
}

export default App;
