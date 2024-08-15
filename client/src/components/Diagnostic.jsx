import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Diagnostic(){
    const navigate = useNavigate();
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="p-8 text-center bg-gray-100"
      >
        <h1 className="text-4xl font-bold text-gray-800">Is your HVAC unit running?</h1>
        <p className="mt-4 text-xl text-gray-600">
        <li>Check operation status of thermostat, inside unit, and outside unit</li>
        <li>Check your breakers</li>
        <button className="px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700" onClick={() => navigate('/air-conditioning/diag2')}>NOT RUNNING AT ALL</button>
        <button className="px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700" onClick={() => navigate('/air-conditioning/diag3')}>ONLY INSIDE RUNNING</button>
        <button className="px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700" onClick={() => navigate('/air-conditioning/diag4')}>ONLY OUTSIDE RUNNING</button>
        <button className="px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700" onClick={() => navigate('/connect-technician')}>Help Me</button>
        </p>
        
      </motion.div>
    );
};

export default Diagnostic;
