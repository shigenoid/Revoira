import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Login.css'; // Import the Login Page styles

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call)
    console.log('Logging in with:', username, password);
    // Redirect to the dashboard after login
    navigate('/dashboard');
  };

  const handleRegister = () => {
    // Redirect to the registration page
    navigate('/register'); // You can create this page later
  };

  return (
    <div className="login-container">
      {/* Header Section */}
      <div className="login-header">
        <h1 className="logo">
          <img src="/icons/logo.svg" alt="Revoira"/>
        </h1>
        <h2 className="welcome-text">Welcome Back!</h2>
        <p className="caption">Enter your username & password</p>
      </div>

      {/* Input Section */}
      <form onSubmit={handleLogin} className="login-form">
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
            placeholder="John Doe"
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
        Don't have an account yet?{' '}
        <span onClick={handleRegister} className="register-link">
          Register here
        </span>
      </p>
    </div>
  );
};

export default Login;