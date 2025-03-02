import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
    // Redirect to the login page after logout
    navigate('/login');
  };

  return (
    <div className="container">
      <h1 className="title">Dashboard</h1>
      <p className="text">Welcome to your dashboard!</p>
      <button onClick={handleLogout} className="button logout">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;