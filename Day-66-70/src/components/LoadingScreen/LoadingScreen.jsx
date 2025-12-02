import React from 'react';
import './LoadingScreen.css';
import { motion } from 'framer-motion';

const LoadingScreen = ({ isLoading, setIsLoading }) => {
  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: 0,
        transitionEnd: {
          display: "none",
        }
      }}
      transition={{ duration: 0.5, delay: 2 }}
      onAnimationComplete={() => setIsLoading(false)}
    >
      <motion.div 
        className="loading-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="loading-logo"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
        >
        :)
        </motion.div>
        <motion.div 
          className="loading-bar-container"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <div className="loading-bar"></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;