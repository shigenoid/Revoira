import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Dashboard.css'; // Import the Dashboard Page styles

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
    // Redirect to the login page after logout
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <p className="dashboard-text">Welcome to your dashboard!</p>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;