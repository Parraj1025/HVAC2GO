import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MobileLandingPage from './components/MobileLandingPage';
import Diagnostic from './components/Diagnostic';
import NotRunning from './components/NotRunning';
import OutsideRunning from './components/OutsideRunning';
import InsideRunning from './components/InsideRunning';
import FloatSwitch from './components/FloatSwitch';
import Login from './components/Login';
import Register from './components/Register';
import ConnectTechnician from './components/ConnectTechnician';
import ProtectedRoute from './components/ProtectedRoute';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Function to check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={isMobile ? <MobileLandingPage /> : <LandingPage />} />
        <Route path="/air-conditioning/diag" element={<Diagnostic />} />
        <Route path="/air-conditioning/diag2" element={<NotRunning />} />
        <Route path="/air-conditioning/diag3" element={<InsideRunning />} />
        <Route path="/air-conditioning/diag4" element={<OutsideRunning />} />
        <Route path="/air-conditioning/Float" element={<FloatSwitch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

        {/* Protected Route for ConnectTechnician */}
        <Route
          path="/connect-technician"
          element={
            <ProtectedRoute>
              <ConnectTechnician />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
