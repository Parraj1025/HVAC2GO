import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import Wave from './Wave'; 
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faVideo, faWrench, faArrowRight, faUser } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';

const LandingPage = () => {
  const navigate = useNavigate();
  const [isTextVisible, setTextVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  const dropdownOptions = [
    { value: 'dashboard', label: 'Dashboard' },
    { value: 'logout', label: 'Logout' },
  ];

  const handleDropdownChange = (selectedOption) => {
    if (selectedOption.value === 'dashboard') {
      navigate('/dashboard');
    } else if (selectedOption.value === 'logout') {
      handleLogout();
    }
  };

  return (
    <div className="landing-page">
      <nav className="navbar flex items-center bg-gray-800 overflow-hidden" style={{ padding: '0.5rem 1rem', height: '60px' }}>
        <Link to="/" className="flex items-center">
          <img
            src="/images/officiallogo7.png"
            alt="Logo"
            className="h-24 max-h-full w-auto"
            style={{ transform: 'translateY(10px)' }}  
          />
        </Link>
        <div>
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="text-white mx-2 flex items-center focus:outline-none"
              >
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                {user.name}
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <Select
                    options={dropdownOptions}
                    onChange={handleDropdownChange}
                    menuIsOpen={true}
                    styles={{
                      control: (provided) => ({ ...provided, display: 'none' }),
                      menu: (provided) => ({ ...provided, position: 'static', boxShadow: 'none', border: 'none' }),
                      option: (provided, state) => ({
                        ...provided,
                        color: state.isSelected ? 'white' : 'black',
                        backgroundColor: state.isSelected ? '#38b2ac' : 'white',
                        padding: '10px 20px',
                        cursor: 'pointer',
                        '&:hover': {
                          backgroundColor: '#f0f0f0',
                        },
                      }),
                    }}
                  />
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="text-white mx-2">
                Login
              </Link>
              <Link to="/register" className="text-white mx-2">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>

      <div className="content-wrapper">
        <div className="flex justify-center mt-10">
          <img src="/images/hvaclogo2.png" alt="Logo" className="logo w-36 h-auto mb-4" />
        </div>

        <div className="flex items-center justify-center h-screen">
          <motion.div
            className="bg-gradient-to-r from-black to-teal-500 p-6 rounded-lg shadow-lg w-[700px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-white text-2xl font-bold mb-4 text-center">
              Looking to diagnose your HVAC unit? Let us help!
            </h1>
            <p className="text-xl text-white text-center mb-6">
              Get guided troubleshooting with step-by-step instructions, connect with certified technicians, or schedule a service call right from our app.
            </p>

            <div className="flex justify-around mb-6">
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faTools} className="text-teal-500 text-4xl mb-2" />
                <span className="text-white text-lg">Diagnostics</span>
              </div>
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faVideo} className="text-teal-500 text-4xl mb-2" />
                <span className="text-white text-lg">Virtual Help</span>
              </div>
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faWrench} className="text-teal-500 text-4xl mb-2" />
                <span className="text-white text-lg">Technician Access</span>
              </div>
            </div>
            <motion.div
              className="text-center"
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              <button
                onClick={() => navigate('/air-conditioning/diag')}
                className="px-6 py-3 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700 transition-colors duration-200"
              >
                Get Started
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </button>
            </motion.div>

            {/* App Store and Google Play badges */}
            <div className="flex justify-center mt-8">
              <a href="IOS_APP_URL" target="_blank" rel="noopener noreferrer">
                <img src="/images/ioslogo1.png" alt="Download on the App Store" className="h-12 mx-2" />
              </a>
              <a href="ANDROID_APP_URL" target="_blank" rel="noopener noreferrer">
                <img src="/images/androidlogo.png" alt="Get it on Google Play" className="h-12 mx-2" />
              </a>
            </div>
          </motion.div>
        </div>

        <Wave /> 
      </div>
    </div>
  );
};

export default LandingPage;
