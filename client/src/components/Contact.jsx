// src/components/Contact.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, faPhone, faMapMarkerAlt, faHeadset, 
  faBusinessTime, faClock, faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF as fabFacebookF, 
  faTwitter as fabTwitter, 
  faInstagram as fabInstagram, 
  faLinkedinIn as fabLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
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
            <Link to="/contact" className="text-teal-400 mx-3 hover:text-teal-400 transition-colors">
              Contact
            </Link>
            <Link to="/services" className="text-white mx-3 hover:text-teal-400 transition-colors">
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
        <h1 className="text-4xl font-bold text-center mb-12 text-teal-400">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-teal-400">Get In Touch</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <FontAwesomeIcon icon={faEnvelope} className="text-teal-400 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-gray-300">support@hvacdiagnostics.com</p>
                  <p className="text-gray-300">technicians@hvacdiagnostics.com (for technician inquiries)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FontAwesomeIcon icon={faPhone} className="text-teal-400 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                  <p className="text-gray-300">Customer Support: (800) 555-HVAC</p>
                  <p className="text-gray-300">Technician Relations: (800) 555-TECH</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-teal-400 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Our Headquarters</h3>
                  <p className="text-gray-300">
                    123 Cooling Avenue<br />
                    Suite 456<br />
                    Heatsville, TX 75001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FontAwesomeIcon icon={faBusinessTime} className="text-teal-400 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                  <p className="text-gray-300">
                    <span className="font-medium">Support Team:</span> 24/7 Availability<br />
                    <span className="font-medium">Office Hours:</span> Monday-Friday, 9am-5pm CST
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-teal-400">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-teal-600 hover:bg-teal-700 p-3 rounded-full transition-colors">
                  <FontAwesomeIcon icon={fabFacebookF} />
                </a>
                <a href="#" className="bg-teal-600 hover:bg-teal-700 p-3 rounded-full transition-colors">
                  <FontAwesomeIcon icon={fabTwitter} />
                </a>
                <a href="#" className="bg-teal-600 hover:bg-teal-700 p-3 rounded-full transition-colors">
                  <FontAwesomeIcon icon={fabInstagram} />
                </a>
                <a href="#" className="bg-teal-600 hover:bg-teal-700 p-3 rounded-full transition-colors">
                  <FontAwesomeIcon icon={fabLinkedinIn} />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-teal-500"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-teal-500"
                  placeholder="john@example.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number (Optional)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-teal-500"
                  placeholder="(123) 456-7890"
                />
              </div>
              <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-teal-500"
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
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-teal-500"
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
        
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center">
            <FontAwesomeIcon icon={faHeadset} className="text-teal-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
            <p className="text-gray-300 mb-3">
              Need help with your account or have questions about our services?
            </p>
            <a href="mailto:support@hvacdiagnostics.com" className="text-teal-400 hover:underline">support@hvacdiagnostics.com</a>
          </div>
          
          <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center">
            <FontAwesomeIcon icon={faClock} className="text-teal-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
            <p className="text-gray-300 mb-3">
              Our platform connects you with technicians around the clock, whenever you need help.
            </p>
            <Link to="/air-conditioning/diag" className="text-teal-400 hover:underline">Start a diagnosis</Link>
          </div>
          
          <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center">
            <FontAwesomeIcon icon={faQuestionCircle} className="text-teal-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">FAQ</h3>
            <p className="text-gray-300 mb-3">
              Find answers to commonly asked questions about our platform and services.
            </p>
            <Link to="/faq" className="text-teal-400 hover:underline">View FAQ</Link>
          </div>
        </div>
        
        <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-teal-400 text-center">For HVAC Technicians</h2>
          
          <div className="text-center mb-8">
            <p className="text-gray-300 text-lg mb-6">
              Are you a certified HVAC technician interested in joining our platform? We're looking for qualified professionals to provide virtual assistance to our customers.
            </p>
            <Link 
              to="/technician-signup" 
              className="inline-block px-6 py-3 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700 transition-colors duration-200"
            >
              Apply to Join Our Network
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-semibold text-lg mb-2">Flexible Schedule</h3>
              <p className="text-gray-300">
                Set your own hours and work as much or as little as you want.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Competitive Pay</h3>
              <p className="text-gray-300">
                Earn competitive rates for sharing your expertise virtually.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Grow Your Business</h3>
              <p className="text-gray-300">
                Connect with new customers and expand your service area.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

