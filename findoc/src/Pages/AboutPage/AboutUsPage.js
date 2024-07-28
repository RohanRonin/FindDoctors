import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import './AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <div className="aboutus-page">
      <NavBar />
      <div className="content">
        <h1>About Us</h1>
        <p>Welcome to our platform! We are dedicated to providing you with the best healthcare services.</p>
        <p>Our mission is to connect patients with the right doctors, specialists, and hospitals. We aim to make healthcare accessible and efficient for everyone.</p>
        <p>Contact us for more information and support.</p>
      </div>
    </div>
  );
};

export default AboutUsPage;
