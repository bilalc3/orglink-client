import React from 'react';
import './App.css';
import logo from './donate1.png';

const Home = () => {
    return (
        <div className = "container gradient-bg">
          <div className = "left-container"> 
            <img className="logo" src={logo} alt="" />
          </div>
          <div className = "right-container"> 
            <h1 className = "words">
              Connect. Educate. Spread.
            </h1>
            <h3 className = "homepage-message">
              Saving Lives Together: Join the Organ Donation Movement and Make a Difference Today! Be a Hero, Donate Your Organs
            </h3>
            <button className = "button">
              Start Talking Today!
            </button>
          </div>
        </div>
  );
}

export default Home;
