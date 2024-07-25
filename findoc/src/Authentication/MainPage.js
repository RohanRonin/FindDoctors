import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css'; 
import adminIcon from '../Assert/logo.png'; 
import userIcon from '../Assert/logo.png'; 

const MainPage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to FinDoc</h1>
      <div className="icon-links">
        <Link to="/admin-login" className="icon-link">
          <div className="icon-wrapper">
            <img src={adminIcon} alt="Admin Login" className="icon" />
            <span>Admin Login</span>
          </div>
        </Link>
        <Link to="/user-login" className="icon-link">
          <div className="icon-wrapper">
            <img src={userIcon} alt="User Login" className="icon" />
            <span>User Login</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
