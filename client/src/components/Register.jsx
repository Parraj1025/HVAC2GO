import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faWrench } from '@fortawesome/free-solid-svg-icons';
import './Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/api/register`, formData);
      setMessage(response.data.message);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.error('Registration error:', error.response);
      setMessage(error.response.data.message || 'Registration failed');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-options-container">
        {/* Customer Registration Option */}
        <div className="auth-option">
          <div className="auth-option-icon">
            <FontAwesomeIcon icon={faUser} size="2x" />
          </div>
          <h2 className="auth-option-title">Register as Customer</h2>
          <p className="auth-option-description">
            Create an account to get help with your HVAC system from certified technicians.
          </p>
          <form onSubmit={handleSubmit} className="auth-form" style={{boxShadow: 'none', padding: 0}}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              required
              className="auth-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="auth-input"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="auth-input"
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              onChange={handleChange}
              required
              className="auth-input"
            />
            <button type="submit" className="auth-button">Register</button>
            {message && <p style={{color: '#f87171', marginTop: '1rem'}}>{message}</p>}
          </form>
        </div>
        
        {/* Technician Registration Option */}
        <div className="auth-option">
          <div className="auth-option-icon">
            <FontAwesomeIcon icon={faWrench} size="2x" />
          </div>
          <h2 className="auth-option-title">Sign Up as Technician</h2>
          <p className="auth-option-description">
            Join our network of certified HVAC professionals and provide virtual assistance to customers.
          </p>
          <div style={{textAlign: 'center', color: '#4b5563'}}>
            <p style={{marginBottom: '1rem'}}>
              To register as a technician, please download our mobile app where you can complete the verification process and set up your professional profile.
            </p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '1rem'}}>
              <a href="#" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                backgroundColor: '#333',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px'
              }}>
                Download on Apple Store
              </a>
              <a href="#" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                backgroundColor: '#333',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px'
              }}>
                Get it on Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <p style={{marginTop: '1.5rem', textAlign: 'center'}}>
        Already have an account? <Link to="/login" className="auth-link">Login</Link>
      </p>
    </div>
  );
};

export default Register;
