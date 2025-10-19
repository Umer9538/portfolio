import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-dark flex flex-col items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-display font-bold text-primary mb-2">
            MU<span className="text-accent">.</span>
          </h1>
          <p className="text-light-dark text-sm">Portfolio</p>
        </motion.div>
        
        <div className="flex space-x-3 justify-center">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-10, 0, -10] }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.2,
              times: [0, 0.5, 1],
              delay: 0 
            }}
            className="w-3 h-3 rounded-full bg-primary"
          />
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-10, 0, -10] }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.2,
              times: [0, 0.5, 1],
              delay: 0.2 
            }}
            className="w-3 h-3 rounded-full bg-primary"
          />
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-10, 0, -10] }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.2,
              times: [0, 0.5, 1],
              delay: 0.4 
            }}
            className="w-3 h-3 rounded-full bg-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;