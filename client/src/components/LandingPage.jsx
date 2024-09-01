// src/components/LandingPage.jsx
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import Wave from './Wave'; // Ensure you import the Wave component
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';

const LandingPage = () => {
  const navigate = useNavigate();
  const [isTextVisible, setTextVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setTextVisible(true), 500);

    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('/api/users/me', { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
          setUser(response.data);
        })
        .catch(error => {
          console.error('Error fetching user data', error);
          // If there's an error, remove the token to ensure the user is logged out
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
    { value: 'logout', label: 'Logout' }
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
      <nav className="navbar">
        <div>
          <Link to="/" className="text-white text-lg font-bold">Home</Link>
        </div>
        <div>
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button onClick={() => setDropdownOpen(!isDropdownOpen)} className="text-white mx-2 flex items-center focus:outline-none">
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
              <Link to="/login" className="text-white mx-2">Login</Link>
              <Link to="/register" className="text-white mx-2">Register</Link>
            </>
          )}
        </div>
      </nav>

      <div className="content-wrapper">
        <div className="logo-container">
          <img src="/images/hvaclogo2.png" alt="Logo" className="logo" />
        </div>

        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="text-center bg-white p-8 rounded-lg shadow-lg"
        >
          <motion.h1
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-center text-gray-800"
          >
            Looking to diagnose your HVAC unit? Let us help!
          </motion.h1>
          {isTextVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mt-4"
            >
              <button
                onClick={() => navigate('/air-conditioning/diag')}
                className="px-6 py-3 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700 transition-colors duration-200"
              >
                GET STARTED
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
      <Wave /> {/* Add the Wave component here */}
    </div>
  );
};

export default LandingPage;
