import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
