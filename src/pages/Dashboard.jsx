import React, { useState } from 'react';
import FrameLayout from '../components/FrameLayout';
import Home from './Home';
import Connect from './Connect';
import User from './User';
import NavBar from '../components/navbar';
import './css/Dashboard.css';

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active page

  // Function to handle navigation
  const handleNavigation = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="app-container">
      {/* FrameLayout to stack pages */}
      <FrameLayout activeIndex={activeIndex}>
        <Home />
        <Connect />
        <User />
      </FrameLayout>

      {/* NavBar for navigation */}
      <NavBar activeIndex={activeIndex} onNavigate={handleNavigation} />
    </div>
  );
};

export default Dashboard;