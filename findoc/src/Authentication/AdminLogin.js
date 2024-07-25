import React from 'react';
import './AdminLogin.css';
import logo from '../Assert/logo.png'; // Assuming you have a logo image

const AdminLogin = () => {
  return (
    <div className="admin-login-container">
      <div className="-admin-login-box">
        <img src={logo} alt="Logo" />
        <h2 className="admin-login-title">ADMIN PANEL</h2>
        <p className="admin-login-subtitle">Control panel login</p>
        <form className="admin-login-form">
        <label className="user-lable"> Username</label>
        <input type="text" className="admin-login-input" placeholder="Username" />
        <label className="pass-lable"> Password</label>
          <input type="password" className="admin-login-input" placeholder="Password" />
          <button type="submit" className="admin-login-button">Login</button>

        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
