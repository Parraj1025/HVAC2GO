import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import MobileWave from './MobileWave';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faVideo, faWrench, faArrowRight, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

const MobileLandingPage = () => {
  const navigate = useNavigate();
  const [isTextVisible, setTextVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setTextVisible(true), 500);

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
    <div className="mobile-landing-page relative min-h-screen">
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

      <div className="content-wrapper px-4 pb-20">
        <div className="flex items-center justify-center min-h-[calc(100vh-180px)]">
          <motion.div
            className="bg-gradient-to-r from-black to-teal-500 p-5 rounded-lg shadow-lg w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-white text-xl font-bold mb-3 text-center">
              Looking to diagnose your HVAC unit? Let us help!
            </h1>
            <p className="text-lg text-white text-center mb-5">
              Get guided troubleshooting with step-by-step instructions, connect with certified technicians, or schedule a service call right from our app.
            </p>

            <div className="flex justify-around mb-5">
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faTools} className="text-teal-500 text-3xl mb-2" />
                <span className="text-white text-sm">Diagnostics</span>
              </div>
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faVideo} className="text-teal-500 text-3xl mb-2" />
                <span className="text-white text-sm">Virtual Help</span>
              </div>
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faWrench} className="text-teal-500 text-3xl mb-2" />
                <span className="text-white text-sm">Technician Access</span>
              </div>
            </div>
            
            <motion.div
              className="text-center"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              <Link 
                to="/services" 
                className="px-5 py-2 text-base font-medium text-white bg-teal-500 rounded hover:bg-teal-700 transition-colors duration-200 inline-block"
              >
                Start Diagnosis
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </Link>
            </motion.div>

            {/* App Store and Google Play badges */}
            <div className="flex justify-center mt-6">
              <a href="IOS_APP_URL" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                <img src="/images/ioslogo1.png" alt="Download on the App Store" className="h-10 mx-2" />
              </a>
              <a href="ANDROID_APP_URL" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                <img src="/images/androidlogo.png" alt="Get it on Google Play" className="h-10 mx-2" />
              </a>
            </div>
          </motion.div>
        </div>

        <MobileWave />
      </div>
    </div>
  );
};

export default MobileLandingPage;
