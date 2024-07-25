import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <header className="App-header">
      <nav className="navbar">
        <div className="logo">FinDoc</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#doctor">Doctor</a></li>
          <li><a href="#specialist">Specialist</a></li>
          <li><a href="#hospital">Hospital</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#about-us">About Us</a></li>
        </ul>
        <div className="nav-actions">
          <button className="location-button">📍</button>
          <button className="login-button">Log in</button>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
