import React from 'react';
import './HomePage.css';
import NavBar from '../Components/NavBar'; // Adjust the path if your file structure is different

function HomePage() {
  return (
    <div className="App">
      <NavBar />
      <main className="content">
        <div className="hero">
          <h1>Best Restaurant <span>In Town.</span></h1>
          <p>We provide best food in town, we provide home delivery and dine in services.</p>
          <div className="hero-buttons">
            <button className="order-button">Order now</button>
            <button className="reservation-button">Reservation</button>
          </div>
          <div className="hero-image">
            <img src="https://example.com/spaghetti.jpg" alt="Spaghetti" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
