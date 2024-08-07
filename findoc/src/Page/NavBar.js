import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../assets/finddoc.png";
import ProfileIcon from "../assets/person-circle.svg";
import Profile from "./Profile"; // Adjust the import path as necessary

const NavBar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileOpen(true);
  };

  const handleDrawerClose = () => {
    setIsProfileOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/home">
            <img src={Logo} style={{ width: 50, height: 60 }} alt="Logo" />
          </Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/hospital">Hospitals</Link>
          </li>
          <li>
            <Link to="/doctors">Doctors</Link>
          </li>
          <li>
            <Link to="/specialists">Specialists</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
        </ul>
        <img
          src={ProfileIcon}
          style={{ width: 30, height: 30, cursor: 'pointer' }}
          alt="Profile"
          onClick={handleProfileClick}
        />
      </nav>
      <Profile open={isProfileOpen} onClose={handleDrawerClose} />
    </>
  );
};

export default NavBar;
