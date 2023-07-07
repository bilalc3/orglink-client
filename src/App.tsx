import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Footer from './Footer';
import logo from './donate.webp';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className = "container">
        <div className = "left-container"> 
          <img className="logo" src={logo} alt="" />
        </div>
        <div className = "right-container"> 
            OrgLink
            <button className = "button">
              Start Talking Today!
            </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
