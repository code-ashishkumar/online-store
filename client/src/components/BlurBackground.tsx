import { motion } from 'framer-motion';
import React from 'react';

const BlurBackground = ({toggle}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" // Blur background with black overlay
      onClick={toggle} // Close search bar when clicking outside
    />
  );
}

export default BlurBackground;
