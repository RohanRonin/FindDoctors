import React from 'react';
import introImage from '../Assert/MainImage.png'; // Adjust the path if your file structure is different
import './HomePage.css';  

function HomePage() {
  return (
    <div className="home-des">
      <div className="intro-section">
        <div className="intro-text">
          <h2><span style={{ color: 'red' }}>Welcome to FinDoc</span></h2>
          <h1>Your Health, Your Location, Your Choice</h1>
          <p>At FinDoc, we believe in making healthcare accessible and convenient for everyone. Whether you're new in town, traveling, or just need to find the best medical facilities near you, FinDoc is here to help.</p>
        </div>
        <div className="intro-image">
          <img src={introImage} alt="Intro" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
