import { motion } from 'framer-motion';

const AirConditioningWalkthrough = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-8 text-center bg-gray-100"
    >
      <h1 className="text-4xl font-bold text-gray-800">Air Conditioning Walkthrough</h1>
      <p className="mt-4 text-xl text-gray-600">Here's how to diagnose common Air Conditioning problems...</p>
    </motion.div>
  );
};

export default AirConditioningWalkthrough;
