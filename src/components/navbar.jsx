import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/home" className="nav-item">
        <span className="nav-icon">
            <img src="./icons/home-icon.svg"></img>
        </span>
        <span className="nav-text">Home</span>
      </Link>
      <Link to="/connect" className="nav-item connect-item">
        <span className="nav-icon">
        <img src="./icons/qr-icon.svg"></img>
        </span>
        <span className="nav-text">Connect</span>
      </Link>
      <Link to="/user" className="nav-item">
        <span className="nav-icon">
        <img src="./icons/user-icon.svg"></img>
        </span>
        <span className="nav-text">User</span>
      </Link>
    </div>
  );
};

export default NavBar;