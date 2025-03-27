import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

const NavBar = ({ activeIndex, onNavigate }) => {
    return (
      <div className="navbar">
        <button
          onClick={() => onNavigate(0)}
          className={`nav-item ${activeIndex === 0 ? 'active' : ''}`}
        >
          <span className="nav-icon">
            <img src="./icons/home-icon.svg"></img>
          </span>
          <span className="nav-text">Home</span>
        </button>
        <button
          onClick={() => onNavigate(1)}
          className={`nav-item connect-item ${activeIndex === 1 ? 'active' : ''}`}
        >
          <span className="nav-icon">
            <img src="./icons/qr-icon.svg"></img>
          </span>
          <span className="nav-text">Connect</span>
        </button>
        <button
          onClick={() => onNavigate(2)}
          className={`nav-item ${activeIndex === 2 ? 'active' : ''}`}
        >
          <span className="nav-icon">
            <img src="./icons/user-icon.svg"></img>
          </span>
          <span className="nav-text">User</span>
        </button>
      </div>
    );
};

export default NavBar;