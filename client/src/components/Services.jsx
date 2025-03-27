import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSnowflake, faFire, faFan, faWrench, 
  faToolbox, faHome, faBuilding, faIndustry,
  faVideo, faCommentDots, faCalendarCheck 
} from '@fortawesome/free-solid-svg-icons';
import Wave from './Wave';

const Services = () => {
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
            <Link to="/about" className="text-white mx-2 hover:text-teal-400 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-white mx-2 hover:text-teal-400 transition-colors">
              Contact
            </Link>
            <Link to="/services" className="text-teal-400 mx-2 hover:text-teal-400 transition-colors">
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
          {/* First Card - Our Virtual HVAC Services */}
          <div className="bg-gradient-to-r from-black to-teal-500 p-6 rounded-xl shadow-lg w-[650px] max-w-[85%] border border-gray-700 mb-8" 
               style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)' }}>
            <h1 className="text-white text-2xl font-bold mb-4 text-center">
              Our Virtual HVAC Services
            </h1>
            
            <p className="text-lg text-white mb-5">
              We offer comprehensive virtual diagnostics and troubleshooting for all types of HVAC systems. Our certified technicians can help you identify and resolve issues quickly and efficiently.
            </p>
            
            <p className="text-lg text-white mb-5">
              Whether you're dealing with cooling problems, heating issues, or ventilation concerns, our experts are just a video call away to provide professional guidance.
            </p>

            <div className="flex justify-around mb-2">
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faVideo} className="text-teal-500 text-3xl mb-2" />
                <span className="text-white text-sm">Live Video Help</span>
              </div>
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faSnowflake} className="text-teal-500 text-3xl mb-2" />
                <span className="text-white text-sm">Cooling Systems</span>
              </div>
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faFire} className="text-teal-500 text-3xl mb-2" />
                <span className="text-white text-sm">Heating Systems</span>
              </div>
            </div>
          </div>

          {/* Second Card - System Types We Support */}
          <div className="bg-gradient-to-r from-black to-teal-500 p-6 rounded-xl shadow-lg w-[650px] max-w-[85%] border border-gray-700 mb-8"
               style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)' }}>
            <h2 className="text-xl font-semibold mb-5 text-white text-center">System Types We Support</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-black bg-opacity-30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FontAwesomeIcon icon={faSnowflake} className="text-teal-500 text-xl" />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-white">Air Conditioning</h3>
                <p className="text-white text-sm">Central AC units, ductless mini-splits, window units, and portable systems.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-black bg-opacity-30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FontAwesomeIcon icon={faFire} className="text-teal-500 text-xl" />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-white">Heating Systems</h3>
                <p className="text-white text-sm">Furnaces, heat pumps, boilers, radiant heating, and space heaters.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-black bg-opacity-30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FontAwesomeIcon icon={faFan} className="text-teal-500 text-xl" />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-white">Ventilation</h3>
                <p className="text-white text-sm">Air handlers, ERVs/HRVs, whole-house fans, and air purifiers.</p>
              </div>
            </div>
          </div>

          {/* Third Card - Our Virtual Service Options */}
          <div className="bg-gradient-to-r from-black to-teal-500 p-6 rounded-xl shadow-lg w-[650px] max-w-[85%] border border-gray-700 mb-8"
               style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)' }}>
            <h2 className="text-xl font-semibold mb-5 text-white text-center">Our Virtual Service Options</h2>
            
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center text-white">
                  <FontAwesomeIcon icon={faVideo} className="text-white mr-2" />
                  Live Video Diagnostics
                </h3>
                <p className="text-white text-sm mb-3">
                  Connect with a certified technician via video call for real-time diagnosis of your HVAC issues.
                </p>
                <ul className="list-disc pl-5 text-white space-y-1 text-sm">
                  <li>Visual inspection guidance</li>
                  <li>Step-by-step troubleshooting</li>
                  <li>Immediate expert advice</li>
                  <li>$35 for 30 minutes</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center text-white">
                  <FontAwesomeIcon icon={faCommentDots} className="text-white mr-2" />
                  Extended Consultation
                </h3>
                <p className="text-white text-sm mb-3">
                  For more complex issues, extend your session to a full hour.
                </p>
                <ul className="list-disc pl-5 text-white space-y-1 text-sm">
                  <li>Comprehensive system evaluation</li>
                  <li>Detailed repair instructions</li>
                  <li>Maintenance guidance</li>
                  <li>$60 for a full hour</li>
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

export default Services;

