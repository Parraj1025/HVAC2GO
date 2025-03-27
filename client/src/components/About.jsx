import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faWifi, faShieldAlt, faCertificate, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import Wave from './Wave';

const About = () => {
  return (
    <div className="landing-page min-h-screen flex flex-col" style={{ 
      overflowY: 'auto',
      overflowX: 'hidden',
      scrollbarWidth: 'auto',
      scrollbarColor: 'rgba(255, 255, 255, 0.5) rgba(0, 0, 0, 0.3)'
    }}>
      <nav className="navbar flex items-center justify-between bg-gray-800 overflow-hidden sticky top-0 z-10" style={{ padding: '0.5rem 1rem', height: '60px' }}>
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/images/officiallogo.png"
              alt="Logo"
              className="h-24 max-h-full w-auto"
              style={{ transform: 'translateY(10px)' }}  
            />
          </Link>
          
          <div className="ml-10">
            <Link to="/about" className="text-teal-400 mx-2 hover:text-teal-400 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-white mx-2 hover:text-teal-400 transition-colors">
              Contact
            </Link>
            <Link to="/services" className="text-white mx-2 hover:text-teal-400 transition-colors">
              Services
            </Link>
          </div>
        </div>
        
        <div>
          <Link to="/login" className="text-white mx-2 hover:text-teal-400 transition-colors">
            Login
          </Link>
          <Link to="/register" className="text-white mx-2 hover:text-teal-400 transition-colors">
            Register
          </Link>
        </div>
      </nav>

      <div className="content-wrapper flex-grow">
        {/* Cards with proper spacing to ensure visibility */}
        <div className="flex flex-col items-center pt-24 pb-20">
          {/* First Card - About Our Virtual HVAC Service */}
          <div className="bg-gradient-to-r from-black to-teal-500 p-6 rounded-xl shadow-lg w-[650px] max-w-[85%] border border-gray-700 mb-8" 
               style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)' }}>
            <h1 className="text-white text-2xl font-bold mb-4 text-center">
              About Our Virtual HVAC Service
            </h1>
            
            <p className="text-lg text-white mb-5">
              Our platform was created to bridge the gap between homeowners experiencing HVAC issues and certified technicians who can provide immediate assistance through video calls.
            </p>
            
            <p className="text-lg text-white mb-5">
              We understand that HVAC problems don't always happen during business hours or in areas with easy access to qualified technicians. That's why we've built a platform that connects you with experts regardless of your location or the time of day.
            </p>

            <div className="flex justify-around mb-2">
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faVideo} className="text-teal-500 text-3xl mb-2" />
                <span className="text-white text-sm">Live Video Help</span>
              </div>
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faWifi} className="text-teal-500 text-3xl mb-2" />
                <span className="text-white text-sm">Reliable Connection</span>
              </div>
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faShieldAlt} className="text-teal-500 text-3xl mb-2" />
                <span className="text-white text-sm">Verified Experts</span>
              </div>
            </div>
          </div>

          {/* Second Card - How Our Platform Works */}
          <div className="bg-gradient-to-r from-black to-teal-500 p-6 rounded-xl shadow-lg w-[650px] max-w-[85%] border border-gray-700 mb-8"
               style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)' }}>
            <h2 className="text-xl font-semibold mb-5 text-white text-center">How Our Platform Works</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-black bg-opacity-30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-white">Describe Your Issue</h3>
                <p className="text-white text-sm">Start by answering a few questions about your HVAC system and the problems you're experiencing.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-black bg-opacity-30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-white">Connect with a Tech</h3>
                <p className="text-white text-sm">Get matched with an available certified technician specializing in your system type.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-black bg-opacity-30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-white">Get Expert Guidance</h3>
                <p className="text-white text-sm">Receive step-by-step instructions to diagnose and potentially fix your issue remotely.</p>
              </div>
            </div>
          </div>

          {/* Third Card - Our Technician Standards */}
          <div className="bg-gradient-to-r from-black to-teal-500 p-6 rounded-xl shadow-lg w-[650px] max-w-[85%] border border-gray-700 mb-8"
               style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)' }}>
            <h2 className="text-xl font-semibold mb-5 text-white text-center">Our Technician Standards</h2>
            
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center text-white">
                  <FontAwesomeIcon icon={faCertificate} className="text-white mr-2" />
                  Verification Process
                </h3>
                <p className="text-white text-sm mb-3">
                  Every technician on our platform undergoes a thorough verification process to ensure they have:
                </p>
                <ul className="list-disc pl-5 text-white space-y-1 text-sm">
                  <li>Valid HVAC certification and licenses</li>
                  <li>Proof of insurance and bonding</li>
                  <li>Government-issued identification</li>
                  <li>Background checks</li>
                  <li>Minimum of 3 years experience</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center text-white">
                  <FontAwesomeIcon icon={faMoneyBillWave} className="text-white mr-2" />
                  Transparent Pricing
                </h3>
                <p className="text-white text-sm mb-3">
                  We believe in clear, upfront pricing with no hidden fees:
                </p>
                <ul className="list-disc pl-5 text-white space-y-1 text-sm">
                  <li>$35 for the first 30 minutes of consultation</li>
                  <li>$60 for a full hour of expert assistance</li>
                  <li>No charges if we can't connect you with a technician</li>
                  <li>Satisfaction guarantee or your money back</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Wave />
      </div>

      {/* Add custom CSS to ensure the content is properly displayed */}
      <style jsx>{`
        .content-wrapper {
          min-height: calc(100vh - 60px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
};

export default About;
