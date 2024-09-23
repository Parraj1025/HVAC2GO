import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [redirect, setRedirect] = useState(false); 
  const token = localStorage.getItem('token'); // Check for the token in localStorage

  useEffect(() => {
    if (!token) {
      setShowPopup(true); // Show popup if the user is not authenticated
      setTimeout(() => {
        setShowPopup(false);
        setRedirect(true); // Trigger redirect after popup disappears
      }, 3000); // Show the popup for 3 seconds
    }
  }, [token]);

  if (!token && redirect) {
    return <Navigate to="/register" />; // Redirect to the register page
  }

  return (
    <>
      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <p>Please sign up to access this feature!</p>
          </div>
        </div>
      )}
      {token && children} {/* Render children if authenticated */}
    </>
  );
};

export default ProtectedRoute;
