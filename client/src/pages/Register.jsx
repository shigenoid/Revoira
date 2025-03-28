import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons
import './css/Register.css'; 
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Toggle for password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle for confirm password

  const navigate = useNavigate();

  const createUser = (e) => {
    e.preventDefault(); 
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    axios.post('http://localhost:3002/register', {
      Email: email,
      UserName: username,
      Password: password
    }).then(() => {
      alert('Account created successfully!');
      navigate('/login');
    }).catch((error) => {
      alert(error.response?.data?.message || 'Registration failed');
    });
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="login-container">
      {/* Header Section */}
      <div className="login-header">
        <h2 className="welcome-text">Create an account</h2>
        <p className="caption">Take part in creating a better world!</p>
      </div>

      {/* Input Section */}
      <form onSubmit={createUser} className="login-form">
        <div className="input-group">
          <label htmlFor="username">Username*</label>
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
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            placeholder="jake.buckley24@rec.om"
          />
        </div>

        {/* Password Field with Eye Icon */}
        <div className="input-group">
          <label htmlFor="password">Password*</label>
          <div className="input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="Enter your password"
            />
            <span 
              className="eye-icon" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* Confirm Password Field with Eye Icon */}
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password*</label>
          <div className="input-container">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input-field"
              placeholder="Confirm your password"
            />
            <span 
              className="eye-icon" 
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* Register Button */}
        <button type="submit" className="signin-button">
          Register
        </button>
      </form>

      <p className="register-text">
        <span onClick={handleLogin} className="register-link">
          Already have an account?
        </span>
      </p>
    </div>
  );
};

export default Register;
