import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, faPhone, faMapMarkerAlt, faHeadset, 
  faBusinessTime, faClock, faQuestionCircle 
} from '@fortawesome/free-solid-svg-icons';
import Wave from './Wave';

const Contact = () => {
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
            <Link to="/contact" className="text-teal-400 mx-2 hover:text-teal-400 transition-colors">
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
          {/* First Card - Contact Information */}
          <div className="bg-gradient-to-r from-black to-teal-500 p-6 rounded-xl shadow-lg w-[650px] max-w-[85%] border border-gray-700 mb-8" 
               style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)' }}>
            <h1 className="text-white text-2xl font-bold mb-4 text-center">
              Contact Us
            </h1>
            
            <p className="text-lg text-white mb-5">
              Have questions about our virtual HVAC service? We're here to help! Reach out to our team using any of the methods below.
            </p>
            
            <div className="space-y-6 mb-5">
              <div className="flex items-start">
                <FontAwesomeIcon icon={faEnvelope} className="text-teal-500 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">Email Us</h3>
                  <p className="text-white">support@hvacdiagnostics.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FontAwesomeIcon icon={faPhone} className="text-teal-500 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">Call Us</h3>
                  <p className="text-white">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FontAwesomeIcon icon={faBusinessTime} className="text-teal-500 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">Business Hours</h3>
                  <p className="text-white">24/7 - Our platform is always available</p>
                  <p className="text-white">Customer Service: Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>
            </div>

            <div className="flex justify-around mb-2">
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faHeadset} className="text-teal-500 text-3xl mb-2" />
                <span className="text-white text-sm">Customer Support</span>
              </div>
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faClock} className="text-teal-500 text-3xl mb-2" />
                <span className="text-white text-sm">24/7 Availability</span>
              </div>
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faQuestionCircle} className="text-teal-500 text-3xl mb-2" />
                <span className="text-white text-sm">FAQ</span>
              </div>
            </div>
          </div>

          {/* Second Card - Contact Form */}
          <div className="bg-gradient-to-r from-black to-teal-500 p-6 rounded-xl shadow-lg w-[650px] max-w-[85%] border border-gray-700 mb-8"
               style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)' }}>
            <h2 className="text-xl font-semibold mb-5 text-white text-center">Send Us a Message</h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 rounded bg-white border border-gray-300 text-gray-800 focus:outline-none focus:border-teal-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded bg-white border border-gray-300 text-gray-800 focus:outline-none focus:border-teal-500"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
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
              
              <div>
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

          {/* Third Card - Support Options */}
          <div className="bg-gradient-to-r from-black to-teal-500 p-6 rounded-xl shadow-lg w-[650px] max-w-[85%] border border-gray-700 mb-8"
               style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)' }}>
            <h2 className="text-xl font-semibold mb-5 text-white text-center">Support Options</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-black bg-opacity-30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-white">Customer Support</h3>
                <p className="text-white text-sm">Need help with your account or have questions about our services?</p>
              </div>
              
              <div className="text-center">
                <div className="bg-black bg-opacity-30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-white">Technical Help</h3>
                <p className="text-white text-sm">Connect with a technician for real-time assistance with your HVAC system.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-black bg-opacity-30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-white">FAQ Resources</h3>
                <p className="text-white text-sm">Browse our knowledge base for answers to common questions.</p>
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

export default Contact;
