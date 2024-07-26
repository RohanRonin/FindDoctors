import React from 'react';
import './HomePage.css';
import CardData from '../Components/CardData';
import introImage from '../Assert/logo.png'; // Adjust the path if your file structure is different

function HomePage() {
  return (
    <div className="home-des">
    <div className="intro-section">
    <div className="intro-text">
    <h2><span style={{ color: 'red' }}>Welcome to our </span></h2>
    <h1>FinDoc Application,</h1>
    <p>your go-to resource for finding qualified and
    trusted medical professionals in your area..</p>
    </div>
    <div className="intro-image">
    <img src={introImage} alt="Royal Enfield Meteor 350" />
    </div>
    </div>
    <CardData />
    </div>
  );
}

export default HomePage;
