import { motion } from 'framer-motion';

const MobileWave = () => {
  return (
    <div className="mobile-wave-container fixed bottom-0 left-0 w-full overflow-hidden" style={{ height: '80px', zIndex: 0 }}>
      <svg 
        viewBox="0 0 600 100" 
        preserveAspectRatio="none" 
        className="w-full h-full"
      >
        {[...Array(3)].map((_, index) => (
          <motion.path
            key={index}
            d={`M0,${40 + index * 10} C150,${10 + index * 15} 300,${60 + index * 5} 600,${30 + index * 10} V100 H0 Z`}
            fill="#38B2AC"
            fillOpacity={0.2 - index * 0.05}
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "reverse", 
              delay: index * 0.5,
              ease: "easeInOut" 
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default MobileWave;
