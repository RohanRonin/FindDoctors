import React, { useState, useEffect } from 'react';
import './HomePage.css';

import image1 from '../../Assert/Onco.webp';
import image2 from '../../Assert/logo.png';
import image3 from '../../Assert/logo.png'; // Add more images as needed

const images = [image1, image2, image3];

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-des">
      <div className="intro-section">
        <div className="intro-text">
          <h2><span style={{ color: 'red' }}>Welcome to FinDoc</span></h2>
          <h1>Your Health, Your Location, Your Choice</h1>
          <p>At FinDoc, we believe in making healthcare accessible and convenient for everyone. Whether you're new in town, traveling, or just need to find the best medical facilities near you, FinDoc is here to help.</p>
        </div>
        <div className="intro-image">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
