import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Login.css'; // Import the Login Page styles
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
  e.preventDefault();  // Prevent default form submission
  
  axios.post('http://localhost:3002/login', { email, password })
    .then(res => {
      console.log(res);
      
      // Assuming successful login if response is valid
      if (res.data.success) {
        navigate('/dashboard');  // Redirect to dashboard
      } else {
        alert('Invalid credentials');  // Handle failed login
      }
    })
    .catch(err => {
      console.log(err);
      alert('Login failed. Please try again.');  // Handle errors
    });
};

  const handleRegister = (e) => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      {/* Header Section */}
      <div className="login-header">
        <h1 className="logo">
          <img src="/icons/logo.svg" alt="Revoira"/>
        </h1>
        <h2 className="welcome-text">Welcome Back!</h2>
        <p className="caption">Salamalekomalekomsalam</p>
      </div>

      {/* Input Section */}
      <form onSubmit={handleLogin} className="login-form">
        <div className="input-group">
          <label htmlFor="username">Email</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            placeholder="Enter your email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            placeholder="Enter your password"
          />
        </div>

        {/* Sign In Button */}
        <button type="submit" className="signin-button">
          Sign In
        </button>
      </form>

      {/* Registration Link */}
      <p className="register-text">
        <span onClick={handleRegister} className="register-link">
          Don't have an account yet?
        </span>
      </p>
    </div>
  );
};

export default Login;