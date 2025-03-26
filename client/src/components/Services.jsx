// src/components/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSnowflake, faFire, faFan, faWrench, 
  faToolbox, faHome, faBuilding, faIndustry,
  faVideo, faCommentDots, faCalendarCheck
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <nav className="navbar flex items-center justify-between bg-gray-800 overflow-hidden px-4 md:px-8 lg:px-16" style={{ padding: '0.5rem 1rem', height: '60px' }}>
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/images/officiallogo.png"
              alt="Logo"
              className="h-24 max-h-full w-auto"
              style={{ transform: 'translateY(10px)' }}  
            />
          </Link>
          
          <div className="hidden md:flex ml-10">
            <Link to="/about" className="text-white mx-3 hover:text-teal-400 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-white mx-3 hover:text-teal-400 transition-colors">
              Contact
            </Link>
            <Link to="/services" className="text-teal-400 mx-3 hover:text-teal-400 transition-colors">
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

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-teal-400">Our Virtual HVAC Services</h1>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center text-white">System Types We Support</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <FontAwesomeIcon icon={faSnowflake} className="text-teal-400 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Air Conditioning Systems</h3>
              <p className="text-gray-300">
                Central AC units, ductless mini-splits, window units, portable systems, and more.
              </p>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <FontAwesomeIcon icon={faFire} className="text-teal-400 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Heating Systems</h3>
              <p className="text-gray-300">
                Furnaces, heat pumps, boilers, radiant heating, and space heaters.
              </p>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <FontAwesomeIcon icon={faFan} className="text-teal-400 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ventilation & Air Quality</h3>
              <p className="text-gray-300">
                Air handlers, ERVs/HRVs, whole-house fans, air purifiers, and humidifiers.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center text-white">Property Types We Serve</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <FontAwesomeIcon icon={faHome} className="text-teal-400 text-2xl mr-3" />
                <h3 className="font-bold text-xl">Residential</h3>
              </div>
              <p className="text-gray-300">
                Single-family homes, apartments, condos, and mobile homes. Our technicians can help with all residential HVAC systems.
              </p>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <FontAwesomeIcon icon={faBuilding} className="text-teal-400 text-2xl mr-3" />
                <h3 className="font-bold text-xl">Commercial</h3>
              </div>
              <p className="text-gray-300">
                Small to medium-sized businesses, retail spaces, offices, and restaurants. Get expert guidance for your commercial HVAC needs.
              </p>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <FontAwesomeIcon icon={faIndustry} className="text-teal-400 text-2xl mr-3" />
                <h3 className="font-bold text-xl">Light Industrial</h3>
              </div>
              <p className="text-gray-300">
                Warehouses, workshops, and small manufacturing facilities. Our specialists can help with industrial-grade systems.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center text-white">Common Issues We Help Diagnose</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-teal-400">Cooling Problems</h3>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li>System not cooling or poor cooling performance</li>
                <li>Strange noises from AC unit</li>
                <li>Water leaks or drainage issues</li>
                <li>Frozen evaporator coils</li>
                <li>Refrigerant leaks or pressure issues</li>
                <li>Electrical problems and control failures</li>
              </ul>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-teal-400">Heating Problems</h3>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li>Furnace not heating or uneven heating</li>
                <li>Pilot light or ignition problems</li>
                <li>Thermostat malfunctions</li>
                <li>Blower motor issues</li>
                <li>Strange odors when system runs</li>
                <li>Short cycling or constant running</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-700 p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-teal-400 text-center">Our Virtual Service Options</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <FontAwesomeIcon icon={faVideo} className="text-teal-400 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Video Diagnostics</h3>
              <p className="text-gray-300">
                Connect with a certified technician via video call for real-time diagnosis of your HVAC issues. They'll guide you through visual inspections and troubleshooting steps.
              </p>
              <p className="font-semibold text-teal-300 mt-3">$35 for 30 minutes</p>
            </div>
            
            <div className="text-center">
              <FontAwesomeIcon icon={faCommentDots} className="text-teal-400 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Extended Consultation</h3>
              <p className="text-gray-300">
                For more complex issues, extend your session to a full hour. Get comprehensive guidance and detailed instructions for repairs or maintenance.
              </p>
              <p className="font-semibold text-teal-300 mt-3">$60 for full hour</p>
            </div>
            
            <div className="text-center">
              <FontAwesomeIcon icon={faCalendarCheck} className="text-teal-400 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Scheduled Follow-ups</h3>
              <p className="text-gray-300">
                Book a follow-up session with the same technician to verify repairs, complete multi-step processes, or address additional questions.
              </p>
              <p className="font-semibold text-teal-300 mt-3">Discounted rates available</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-teal-400 text-center">Additional Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-3">
                <FontAwesomeIcon icon={faToolbox} className="text-teal-400 text-2xl mr-3" />
                <h3 className="text-xl font-semibold">Preventative Maintenance Guidance</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Learn how to properly maintain your HVAC system to prevent future issues and extend equipment life. Our technicians can guide you through:
              </p>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                <li>Filter replacement procedures</li>
                <li>Coil cleaning techniques</li>
                <li>Condensate drain maintenance</li>
                <li>Seasonal system preparation</li>
                <li>Efficiency optimization tips</li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-3">
                <FontAwesomeIcon icon={faWrench} className="text-teal-400 text-2xl mr-3" />
                <h3 className="text-xl font-semibold">Technician Referral Service</h3>
              </div>
              <p className="text-gray-300 mb-4">
                If your issue requires hands-on professional service, we can help connect you with verified local technicians in your area who can:
              </p>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                <li>Perform complex repairs</li>
                <li>Handle refrigerant-related services</li>
                <li>Install replacement parts or systems</li>
                <li>Conduct in-person inspections</li>
                <li>Provide written estimates for major work</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/air-conditioning/diag" className="inline-block px-6 py-3 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700 transition-colors duration-200">
              Start Your Diagnosis Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

