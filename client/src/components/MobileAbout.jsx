import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faVideo, faWifi, faShieldAlt, faCertificate, 
  faMoneyBillWave, faBars, faTimes, faUser
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import MobileWave from './MobileWave';
import '../MobileAbout.css';

const MobileAbout = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get('/api/users/me', { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error('Error fetching user data', error);
          localStorage.removeItem('token');
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <div className="mobile-about-container relative min-h-screen">
      {/* Navigation - Styled to match MobileLandingPage navbar */}
      <nav className="navbar flex items-center justify-between bg-gray-800 overflow-hidden px-4" style={{ padding: '0.5rem 1rem', height: '60px', zIndex: 10, position: 'relative' }}>
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/images/officiallogo.png"
              alt="Logo"
              className="h-20 max-h-full w-auto"
              style={{ transform: 'translateY(5px)' }}
            />
          </Link>
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white p-2 focus:outline-none"
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-95 z-20 flex flex-col items-center justify-center">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            ✕
          </button>
          
          <div className="flex flex-col items-center space-y-6 text-xl">
            <Link 
              to="/about" 
              className="text-white hover:text-teal-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-teal-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/services" 
              className="text-white hover:text-teal-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            
            {user ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="text-white hover:text-teal-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button 
                  onClick={handleLogout}
                  className="text-white hover:text-teal-400 transition-colors bg-transparent border-none text-xl"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="text-white hover:text-teal-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="text-white hover:text-teal-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}

      {/* Content Area */}
      <div className="mobile-about-content">
        {/* First Card - About Our Virtual HVAC Service */}
        <div className="mobile-about-card">
          <h1 className="mobile-about-card-title">
            About Our Virtual HVAC Service
          </h1>
          
          <p className="mobile-about-card-text">
            Our platform bridges the gap between homeowners experiencing HVAC issues and certified technicians who provide immediate assistance through video calls.
          </p>
          
          <p className="mobile-about-card-text">
            We understand that HVAC problems don't always happen during business hours or in areas with easy access to qualified technicians. That's why we've built a platform that connects you with experts regardless of your location or the time of day.
          </p>
          
          <div className="mobile-about-features">
            <div className="mobile-about-feature">
              <FontAwesomeIcon icon={faVideo} className="mobile-about-feature-icon" />
              <span className="mobile-about-feature-text">Live Video Help</span>
            </div>
            <div className="mobile-about-feature">
              <FontAwesomeIcon icon={faWifi} className="mobile-about-feature-icon" />
              <span className="mobile-about-feature-text">Reliable Connection</span>
            </div>
            <div className="mobile-about-feature">
              <FontAwesomeIcon icon={faShieldAlt} className="mobile-about-feature-icon" />
              <span className="mobile-about-feature-text">Verified Experts</span>
            </div>
          </div>
        </div>

        {/* Second Card - How Our Platform Works */}
        <div className="mobile-about-card">
          <h2 className="mobile-about-card-subtitle">How Our Platform Works</h2>
          
          <div className="mobile-about-steps">
            <div className="mobile-about-step">
              <div className="mobile-about-step-number">
                <span className="mobile-about-step-number-text">1</span>
              </div>
              <h3 className="mobile-about-step-title">Describe Your Issue</h3>
              <p className="mobile-about-step-description">Start by answering questions about your HVAC system and the problems you're experiencing.</p>
            </div>
            
            <div className="mobile-about-step">
              <div className="mobile-about-step-number">
                <span className="mobile-about-step-number-text">2</span>
              </div>
              <h3 className="mobile-about-step-title">Connect with a Tech</h3>
              <p className="mobile-about-step-description">Get matched with an available certified technician specializing in your system type.</p>
            </div>
            
            <div className="mobile-about-step">
              <div className="mobile-about-step-number">
                <span className="mobile-about-step-number-text">3</span>
              </div>
              <h3 className="mobile-about-step-title">Get Expert Guidance</h3>
              <p className="mobile-about-step-description">Receive step-by-step instructions to diagnose and potentially fix your issue remotely.</p>
            </div>
          </div>
        </div>

        {/* Third Card - Our Technician Standards */}
        <div className="mobile-about-card">
          <h2 className="mobile-about-card-subtitle">Our Technician Standards</h2>
          
          <div className="mobile-about-sections">
            <div className="mobile-about-section">
              <h3 className="mobile-about-section-title">
                <FontAwesomeIcon icon={faCertificate} className="mobile-about-section-icon" />
                Verification Process
              </h3>
              <p className="mobile-about-card-text">
                Every technician on our platform undergoes a thorough verification process to ensure they have:
              </p>
              <ul className="mobile-about-list">
                <li>Valid HVAC certification and licenses</li>
                <li>Proof of insurance and bonding</li>
                <li>Government-issued identification</li>
                <li>Background checks</li>
                <li>Minimum of 3 years experience</li>
              </ul>
            </div>
            
            <div className="mobile-about-section">
              <h3 className="mobile-about-section-title">
                <FontAwesomeIcon icon={faMoneyBillWave} className="mobile-about-section-icon" />
                Transparent Pricing
              </h3>
              <p className="mobile-about-card-text">
                We believe in clear, upfront pricing with no hidden fees:
              </p>
              <ul className="mobile-about-list">
                <li>$35 for the first 30 minutes of consultation</li>
                <li>$60 for a full hour of expert assistance</li>
                <li>No charges if we can't connect you with a technician</li>
                <li>Satisfaction guarantee or your money back</li>
              </ul>
            </div>
          </div>
        </div>

        {/* App Store badges */}
        <div className="mobile-about-app-badges">
          <a 
            href="IOS_APP_URL" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mobile-about-app-badge"
          >
            <img 
              src="/images/ioslogo1.png" 
              alt="Download on the App Store" 
              className="mobile-about-app-badge-img" 
            />
          </a>
          <a 
            href="ANDROID_APP_URL" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mobile-about-app-badge"
          >
            <img 
              src="/images/androidlogo.png" 
              alt="Get it on Google Play" 
              className="mobile-about-app-badge-img" 
            />
          </a>
        </div>
      </div>

      {/* Add the wave at the bottom with fixed positioning */}
      <MobileWave />
    </div>
  );
};

export default MobileAbout;
