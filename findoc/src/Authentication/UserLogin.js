import React from 'react';
import { Link } from 'react-router-dom';
import './UserLogin.css';
import logo from '../Assert/logo.png'; // Assuming you have a logo image

const UserLogin = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Logo" />
        <h2 className="login-title">USER LOGIN</h2>
        <p className="login-subtitle">Login to your account</p>
        <form className="login-form">
          <label className="user-label">Username</label>
          <input type="text" className="login-input" placeholder="Username" />
          <label className="pass-label">Password</label>
          <input type="password" className="login-input" placeholder="Password" />
          <Link to="/NavBar">
          <button type="submit" className="login-button">Login</button>
          </Link>
        </form>
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;