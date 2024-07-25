import React from 'react';
import './HomePage.css';
import NavBar from '../Components/NavBar'; // Adjust the path if your file structure is different
import CardData from '../Components/CardData';

function HomePage() {
  return (
    <div className="home-des">
    <h1>Welcome</h1>
    <NavBar />
    <CardData />
     
    </div>
  );
}

export default HomePage;
