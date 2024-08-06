import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const NavBar = () => {
  const [location, setLocation] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

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
          <Select
            value={location}
            onChange={handleLocationChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Select Location' }}
            style={{ color: 'black', marginRight: '16px' }} // Adjust styles as needed
          >
            <MenuItem value="" disabled>
              Select Location
            </MenuItem>
            <MenuItem value="Location1">Location1</MenuItem>
            <MenuItem value="Location2">Location2</MenuItem>
            <MenuItem value="Location3">Location3</MenuItem>
            {/* Add more locations as needed */}
          </Select>
          <Link to="/login">
            <button className="login-button">Log in</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
