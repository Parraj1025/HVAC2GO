// src/components/PromptSignUp.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const PromptSignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Please Sign Up Before Proceeding</h1>
      <p className="text-xl text-gray-600 mb-8">
        You need to sign up or log in to access this feature.
      </p>
      <Link to="/register" className="px-6 py-3 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700 transition-colors duration-200">
        Sign Up
      </Link>
      <p className="mt-4 text-gray-600">
        Already have an account? <Link to="/login" className="text-teal-500">Log In</Link>
      </p>
    </div>
  );
};

export default PromptSignUp;
