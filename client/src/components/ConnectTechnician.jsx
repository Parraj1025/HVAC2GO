import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ConnectTechnician = () => {
  const [isTextVisible, setTextVisible] = useState(false);
  const [paidFor, setPaidFor] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setTextVisible(true), 500);

    // Load PayPal SDK script with client-id
    const loadPayPalScript = () => {
      if (document.querySelector('#paypal-script')) return; // Prevent multiple script loads

      const script = document.createElement('script');
      script.id = 'paypal-script';
      script.src = `https://sandbox.paypal.com/sdk/js?client-id=AYpoudfs0P962wsDsbyyu-jugWmssnqwwRoIjiRc4wOxgQdxxK4Dj0N7D0bNcvwKj7TZiUFa2RXL5Egp&currency=USD`;
      script.async = true;

      script.onload = () => {
        window.paypal.Buttons({
          // Create order directly on the client-side
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: '49.99', 
                  currency_code: 'USD'
                }
              }]
            });
          },
          // Capture the order once approved
          onApprove: async (data, actions) => {
            try {
              const order = await actions.order.capture();
              setPaidFor(true);
              console.log('Payment successful:', order);
            } catch (error) {
              console.error('Error capturing PayPal order:', error);
            }
          },
          onError: (err) => {
            console.error('PayPal Button Error:', err);
          }
        }).render('#paypal-button-container'); // Render PayPal button
      };

      document.body.appendChild(script); // Append PayPal script to the body
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

          {/* PayPal Payment Button */}
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
