import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion'; // Framer Motion for animations
import React, { useState, useEffect } from 'react';
import useScroll from '../hooks/useScroll';
import BlurBackground from './BlurBackground';

const SearchBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle search bar visibility and manage scroll behavior
  const toggleSearchBar = () => {
    setIsVisible(!isVisible);
  };

  // Manage body scroll when the search bar is visible
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
      document.body.style.overflow = ''; // Enable scroll
    }

    return () => {
      document.body.style.overflow = ''; // Reset scroll on cleanup
    };
  }, [isVisible]);

  useScroll(isVisible);

  return (
    <div className="">
      {/* Search Icon */}
      <MagnifyingGlassIcon
        className="w-[22px] h-[22px]  cursor-pointer"
        onClick={toggleSearchBar}
      />

      {/* Search Input with Blur Effect */}
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Background Blur */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" // Blur background with black overlay
              onClick={toggleSearchBar} // Close search bar when clicking outside
            /> */}

            <BlurBackground {...{toggle : toggleSearchBar}}/>

            {/* Search Input */}
            <motion.div
              initial={{ opacity: 0, y: -10 }} // Initial position hidden and up
              animate={{ opacity: 1, y: 0 }} // Show input box
              exit={{ opacity: 0, y: -10 }} // Exit animation
              transition={{ duration: 0.4, ease: 'easeInOut' }} // Smooth transition
              className="fixed w-full mx-auto max-w-lg px-6 top-32 left-0 right-0 flex justify-center z-50"
            >
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-3 border border-gray-300 rounded-md bg-white focus:outline-none"
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
