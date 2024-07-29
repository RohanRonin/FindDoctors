import React from 'react';
import { Link } from 'react-router-dom';
import './AdminLogin.css';
//import logo from '../Assert/logo.png'; // Adjust the path to your logo

const AdminPage = () => {
  return (
    <div className="admin-container">
      <div className="admin-box">
      <h2 className="admin-title">ADMIN LOGIN</h2>
      <p className="admin-subtitle">Login to your admin account</p>
      <form className="admin-form">
      <label className="user-label">Username</label>
      <input type="text" className="admin-input" placeholder="Username" />
      <label className="pass-label">Password</label>
      <input type="password" className="admin-input" placeholder="Password" />
      <Link to="/admin/dashboard">
      <button type="submit" className="admin-button">Login</button>
      </Link>
      </form>
      </div>
      </div>
    );
};

export default AdminPage;

// 2nd div  <img src={logo} alt="Logo" />