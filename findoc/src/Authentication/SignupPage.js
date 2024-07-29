import React from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css';
 // Adjust the path to your logo

const SignupPage = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
      <h2 className="signup-title">SIGNUP</h2>
      <p className="signup-subtitle">Create a new account</p>
      <form className="signup-form">
          <label className="user-label">Username</label>
          <input type="text" className="signup-input" placeholder="Username" />
          <label className="email-label">Email</label>
          <input type="email" className="signup-input" placeholder="Email" />
          <label className="pass-label">Password</label>
          <input type="password" className="signup-input" placeholder="Password" />
          <label className="confirm-pass-label">Confirm Password</label>
          <input type="password" className="signup-input" placeholder="Confirm Password" />
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;

// afrter 2nd div<img src={logo} alt="Logo" /> 