// src/components/ConnectTechnician.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const ConnectTechnician = () => {
  const [isTextVisible, setTextVisible] = useState(false);
  const [paidFor, setPaidFor] = useState(false);
  const [orderID, setOrderID] = useState(null);

  useEffect(() => {
    setTimeout(() => setTextVisible(true), 500);

    const loadPayPalScript = () => {
      // Check if the PayPal script is already loaded
      if (document.querySelector('#paypal-script')) return;

      const script = document.createElement('script');
      script.id = 'paypal-script';
      script.src = `https://www.paypal.com/sdk/js?client-id=${import.meta.env.VITE_PAYPAL_CLIENT_ID}`;
      script.addEventListener('load', () => {
        window.paypal.Buttons({
          createOrder: async (data, actions) => {
            try {
              const response = await axios.post('/api/create-order', { amount: '49.99' });
              setOrderID(response.data.id);
              return response.data.id;
            } catch (error) {
              console.error('Error creating PayPal order:', error);
            }
          },
          onApprove: async (data, actions) => {
            try {
              const order = await actions.order.capture();
              setPaidFor(true);
              console.log('Payment successful:', order);
            } catch (error) {
              console.error('Error capturing order:', error);
            }
          },
          onError: (err) => {
            console.error('PayPal Button Error:', err);
          }
        }).render('#paypal-button-container');
      });
      document.body.appendChild(script);
    };

    loadPayPalScript();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Sliding Text */}
      {isTextVisible && (
        <motion.h1
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center text-gray-800 mb-8"
        >
          Connect to a technician here!
        </motion.h1>
      )}

      {/* Payment Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Add your payment details here</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          {/* Add other fields here */}
          {/* PayPal Payment Option */}
          <div className="mt-6 text-center">
            <p className="text-lg font-medium text-gray-800 mb-4">Pay with PayPal</p>
            <div id="paypal-button-container" className="mx-auto"></div>
          </div>

          {/* Connect Via Icons */}
          <div className="mt-6 text-center">
            <p className="text-lg font-medium text-gray-800 mb-4">Connect Via..</p>
            <div className="flex justify-center space-x-4">
              <a href="your-zoom-link-here" target="_blank" rel="noopener noreferrer">
                <img src="/images/zoom-icon.png" alt="Zoom" className="w-10 h-10" />
              </a>
              <a href="your-google-meet-link-here" target="_blank" rel="noopener noreferrer">
                <img src="/images/google-meet-icon.png" alt="Google Meet" className="w-10 h-10" />
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConnectTechnician;
