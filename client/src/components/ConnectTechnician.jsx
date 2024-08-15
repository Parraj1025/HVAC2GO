import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ConnectTechnician = () => {
  const [isTextVisible, setTextVisible] = useState(false);
  const [paidFor, setPaidFor] = useState(false);

  useEffect(() => {
    setTimeout(() => setTextVisible(true), 500);

    // Load PayPal script
    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID";
    script.addEventListener('load', () => {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '49.99'
              }
            }]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
          console.log(order);
        },
        onError: (err) => {
          console.error(err);
        }
      }).render('#paypal-button-container');
    });
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Sliding Text */}
      {isTextVisible && (
        <motion.h1
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-gray-800 mb-8"
        >
          Connect to a technician here!
        </motion.h1>
      )}

      {/* Payment Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Fill out this form and make a one-time payment to connect to a Technician</h2>
        {/* Billing Address Fields */}
        {/* ... (existing form fields) */}

        {/* PayPal Payment Option */}
        <div className="mt-8 text-center">
          <p className="text-lg font-medium text-gray-800 mb-4">Pay with</p>
          <div id="paypal-button-container"></div>
        </div>

        {/* Connect Via Icons */}
        <div className="mt-8 text-center">
          <p className="text-lg font-medium text-gray-800 mb-4">Connect Via..</p>
          <div className="flex justify-center space-x-4">
            <a href="your-zoom-link-here" target="_blank" rel="noopener noreferrer">
              <img src="/images/zoom-icon.png" alt="Zoom" className="w-12 h-12" />
            </a>
            <a href="your-google-meet-link-here" target="_blank" rel="noopener noreferrer">
              <img src="/images/google-meet-icon.png" alt="Google Meet" className="w-12 h-12" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectTechnician;
