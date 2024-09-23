// src/components/NotRunning.js
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function NotRunning() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-8 text-center bg-gray-100"
    >
      <h1 className="text-4xl font-bold text-gray-800">So neither of your units are operating</h1>
      <p className="mt-4 text-xl text-gray-600">
        Here is what you should do next:
        <li>Verify thermostat is on</li>
        <li>Visually inspect breakers</li>
        <li>
          Go to unit and inspect safety/float switch for water
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/EWd-e5dRg_E"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </li>
        <div className="mt-4">
          <button
            className="px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700"
            onClick={() => navigate('/air-conditioning/Float')}
          >
            Clear Drain Line
          </button>
          <button
            className="px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700"
            onClick={() => navigate('/connect-technician')}
          >
            Help Me
          </button>
          <button
            className="px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700"
            onClick={() => navigate('/air-conditioning/diag')}
          >
            Go Back
          </button>
        </div>
      </p>
    </motion.div>
  );
}

export default NotRunning;
