// src/components/Contact.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, faPhone, faMapMarkerAlt, faHeadset, 
  faBusinessTime, faClock, faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="landing-page min-h-screen flex flex-col" style={{ overflow: 'auto', scrollbarWidth: 'thin', scrollbarGutter: 'stable' }}>
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
            <Link to="/about" className="text-white mx-2">
              About
            </Link>
            <Link to="/contact" className="text-teal-400 mx-2">
              Contact
            </Link>
            <Link to="/services" className="text-white mx-2">
              Services
            </Link>
          </div>
        </div>
        
        <div>
          <Link to="/login" className="text-white mx-2">
            Login
          </Link>
          <Link to="/register" className="text-white mx-2">
            Register
          </Link>
        </div>
      </nav>

      <div className="flex-grow bg-gradient-to-r from-black to-teal-500" style={{ 
        paddingTop: '2rem', 
        paddingBottom: '2rem',
        overflowY: 'auto',
        overflowX: 'hidden',
        paddingRight: '0',
        marginRight: '0',
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(255, 255, 255, 0.3) transparent'
      }}>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-gradient-to-r from-black to-teal-500 p-6 rounded-lg shadow-lg w-[700px] my-4 border border-gray-700">
            <h1 className="text-white text-2xl font-bold mb-4 text-center">
              Contact Us
            </h1>
            
            <div className="grid md:grid-cols-2 gap-10 mb-8">
              <div>
                <h2 className="text-xl font-semibold mb-6 text-white">Get In Touch</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <FontAwesomeIcon icon={faEnvelope} className="text-teal-400 text-xl mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-white">Email Us</h3>
                      {/* Placeholder for future content */}
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FontAwesomeIcon icon={faPhone} className="text-teal-400 text-xl mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-white">Call Us</h3>
                      {/* Placeholder for future content */}
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-teal-400 text-xl mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-white">Our Headquarters</h3>
                      {/* Placeholder for future content */}
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FontAwesomeIcon icon={faBusinessTime} className="text-teal-400 text-xl mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-white">Business Hours</h3>
                      {/* Placeholder for future content */}
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 rounded bg-white border border-gray-300 text-gray-800 focus:outline-none focus:border-teal-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 rounded bg-white border border-gray-300 text-gray-800 focus:outline-none focus:border-teal-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">Subject</label>
                    <select 
                      id="subject" 
                      className="w-full px-4 py-2 rounded bg-white border border-gray-300 text-gray-800 focus:outline-none focus:border-teal-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="technician">Become a Technician</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">Message</label>
                    <textarea 
                      id="message" 
                      rows="5" 
                      className="w-full px-4 py-2 rounded bg-white border border-gray-300 text-gray-800 focus:outline-none focus:border-teal-500"
                      placeholder="How can we help you today?"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-4 rounded transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-black to-teal-500 p-6 rounded-lg shadow-lg w-[700px] my-4 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-6 text-white text-center">Support Options</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md text-center">
                <FontAwesomeIcon icon={faHeadset} className="text-teal-400 text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Customer Support</h3>
                <p className="text-gray-300 mb-3">
                  Need help with your account or have questions about our services?
                </p>
                <a href="mailto:support@hvacdiagnostics.com" className="text-teal-400 hover:underline">support@hvacdiagnostics.com</a>
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md text-center">
                <FontAwesomeIcon icon={faClock} className="text-teal-400 text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">24/7 Availability</h3>
                <p className="text-gray-300 mb-3">
                  Our platform connects you with technicians around the clock, whenever you need help.
                </p>
                <Link to="/air-conditioning/diag" className="text-teal-400 hover:underline">Start a diagnosis</Link>
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md text-center">
                <FontAwesomeIcon icon={faQuestionCircle} className="text-teal-400 text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">FAQ</h3>
                <p className="text-gray-300 mb-3">
                  Find answers to commonly asked questions about our platform and services.
                </p>
                <Link to="/faq" className="text-teal-400 hover:underline">View FAQ</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
