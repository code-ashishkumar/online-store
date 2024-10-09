// src/components/SearchBar.tsx
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion'; // Framer Motion for animations
import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle search bar visibility
  const toggleSearchBar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="">
      {/* Search Icon */}
      
        <MagnifyingGlassIcon className="w-[22px] h-[22px] lg:h-6 lg:w-6 cursor-pointer"  onClick={toggleSearchBar}/>

      {/* Search Input */}
      <AnimatePresence>
      {isVisible && (
      <motion.div
        initial={{ opacity: 0, y: -10 }} // Initial position hidden and up
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }} // Show or hide depending on state
        transition={{ duration: 0.4, ease: "easeInOut" }} // Smooth transition
        exit={{ opacity: 0, y: -10 }} // Animate exit to hidden and up
        className="fixed w-full mx-auto max-w-lg px-6 top-32 left-0 right-0  flex justify-center z-50"
      >
      
          <input
            type="text"
            placeholder="Search..."
            className="w-full  p-3 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none"
          />
        
      </motion.div>)}</AnimatePresence>
    </div>
  );
};

export default SearchBar;
