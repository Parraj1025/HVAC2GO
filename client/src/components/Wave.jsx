import { motion } from 'framer-motion';

const Wave = () => {
  return (
    <svg viewBox="0 0 1440 363" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-wave absolute top-0 left-1/2 transform -translate-x-1/2">
      {[...Array(5)].map((_, index) => (
        <motion.path
          key={index}
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: index * 2 }}
          d={`M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 ${225.903 + index * 20}C620.48 ${458.652 + index * 20} 354.282 ${355.647 + index * 20} 170.328 ${185.318 + index * 20}C23.165 ${49.0556 + index * 20} -4.21721 ${8.32998 + index * 20} 0.487081 5`}
          stroke="#38B2AC" // Teal-500 color
          strokeOpacity="0.5"
          strokeWidth="10"
        />
      ))}
    </svg>
  );
};

export default Wave;
