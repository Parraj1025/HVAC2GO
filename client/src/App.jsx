// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Diagnostic from './components/Diagnostic';
import NotRunning from './components/NotRunning';
import OutsideRunning from './components/OutsideRunning';
import InsideRunning from './components/InsideRunning';
import FloatSwitch from './components/FloatSwitch';
import Login from './components/Login';
import Register from './components/Register';
import ConnectTechnician from './components/ConnectTechnician';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/air-conditioning/diag" element={<Diagnostic />} />
        <Route path="/air-conditioning/diag2" element={<NotRunning />} />
        <Route path="/air-conditioning/diag3" element={<InsideRunning />} />
        <Route path="/air-conditioning/diag4" element={<OutsideRunning />} />
        <Route path="/air-conditioning/Float" element={<FloatSwitch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

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
