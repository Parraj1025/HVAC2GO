import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css'; // Import the CSS file

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/login', formData);
      const token = response.data.token;
      localStorage.setItem('token', token);
      setMessage('Login successful');
      navigate('/');
    } catch (error) {
      setMessage(error.response.data.message || 'Login failed');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h1 className="auth-title">Login</h1>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="auth-input" />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="auth-input" />
        <button type="submit" className="auth-button">Login</button>
        {message && <p className="mt-4 text-red-500">{message}</p>}
        <div className="mt-4">
          <p>Don't have an account? <Link to="/register" className="auth-link">Register here</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
