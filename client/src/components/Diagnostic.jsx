import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import axios from 'axios';

function Diagnostic() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(false); // Updated state to control button display
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('/api/users/me', { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
          setUser(response.data);
        })
        .catch(() => {
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

  // Function to toggle showing the buttons instead of the initial content
  const showDiagnosticOptions = () => {
    setShowButtons(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-center items-center min-h-screen p-8 relative"
    >
      {/* Navigation Bar */}
      <nav className="navbar w-full flex justify-between items-center mb-8 py-2" style={{ height: '60px' }}>
        <div className="flex items-center">
          <Link to="/" className="text-white text-lg font-bold">Home</Link>
          <img src="/images/hvacfan.png" alt="Logo" className="h-12 w-12 ml-4" />
        </div>
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
              <Link to="/login" className="text-white mx-2">Login</Link>
              <Link to="/register" className="text-white mx-2">Register</Link>
            </>
          )}
        </div>
      </nav>

      {/* Diagnostic Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-black to-teal-500 border-4 border-gray-300 border-opacity-50 rounded-lg p-8"
        style={{ maxWidth: '700px', width: '80%', height: '550px' }}
      >
        {!showButtons ? (
          <>
            <h1 className="text-4xl font-bold text-white mb-4 text-center">
              Hi! Let's diagnose your HVAC unit
            </h1>
            <ul className="text-white text-lg space-y-2 list-disc list-inside">
              <li>Check your breakers</li>
              <li>Ensure air filters are clean and replaced regularly</li>
              <li>Check that the vents are not blocked or obstructed by furniture</li>
              <li>Inspect for any strange noises coming from the unit</li>
              <li>Verify if the unit is leaking water or refrigerant</li>
              <li>Ensure that your thermostat is set to the correct mode (cooling/heating)</li>
              <li>Check operation status of thermostat, inside unit, and outside unit</li>
            </ul>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mt-6 flex justify-center cursor-pointer"
              onClick={showDiagnosticOptions} // Trigger button view when clicked
            >
              <div className="relative">
                <span className="block w-20 h-20 text-white text-6xl">
                  &#10132; {/* Right-pointing white arrow */}
                </span>
              </div>
            </motion.div>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-white mb-4 text-center">
              Is your HVAC unit running?
            </h1>
            <div className="flex flex-col space-y-4">
              <button
                className="px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700"
                onClick={() => navigate('/air-conditioning/diag2')}
              >
                NOT RUNNING AT ALL
              </button>
              <button
                className="px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700"
                onClick={() => navigate('/air-conditioning/diag3')}
              >
                ONLY INSIDE RUNNING
              </button>
              <button
                className="px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700"
                onClick={() => navigate('/air-conditioning/diag4')}
              >
                ONLY OUTSIDE RUNNING
              </button>
              <button
                className="px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700"
                onClick={() => navigate('/connect-technician')}
              >
                Help Me
              </button>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Diagnostic;
