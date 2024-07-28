import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header className="-header">
      <nav className="navbar">
        <div className="logo">FinDoc</div>
        <ul className="nav-links">
          <li><Link to="/Mainp" className="nav-link">Home</Link></li>
          <li><Link to="/doctor" className="nav-link">Doctor</Link></li>
          <li><Link to="/specialist" className="nav-link">Specialist</Link></li>
          <li><Link to="/hospital" className="nav-link">Hospital</Link></li>
          <li><a href="/events" className="nav-link">Events</a></li>
          <li><a href="/about-us" className="nav-link">About Us</a></li>
        </ul>
        <div className="nav-actions">
          <button className="location-button">📍</button>
          <Link to="/login">
          </Link>
          <button className="login-button">Log in</button>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
