import React from 'react';
import { Link } from 'react-router-dom';
import './Lhero.css';
import Statistics from './Statistics'; // Import the new component

function Lhero() {
  return (
    <div className="Lhero">
      <header className="L-header">
        <h1>Welcome to FinDoc</h1>
      </header>
      <main>
        <section className="hero">
          <h2>FIND DOCTOR & FIX YOUR ONLINE</h2>
          <p>
            Join thousands of satisfied users who have found the right doctors through our platform.
            Start your journey to better health today by searching for the best healthcare professionals
            in your area. Contact us for more information or to get started.
          </p>
        </section>
        <section className="explore">
          <Link to="./Login">
            <button className="explore-button">Explore</button>
          </Link>
        </section>
        <Statistics /> {/* Add the Statistics component here */}
      </main>
    </div>
  );
}

export default Lhero;
