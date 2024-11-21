// src/components/Navbar.tsx
import React, { useState } from 'react';
import { FiSearch, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'; // Icons from react-icons
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">ShopLogo</a>
        </div>

        {/* Navigation Links (hidden on mobile) */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-gray-900">
            Home
          </a>
          <a href="#shop" className="text-gray-700 hover:text-gray-900">
            Shop
          </a>
          <a href="#about" className="text-gray-700 hover:text-gray-900">
            About
          </a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </a>
        </nav>

        {/* Icons */}
        <div className="flex space-x-4 items-center">
          {/* Search Icon */}
          <button className="p-2">
            <FiSearch className="text-2xl text-gray-700" />
          </button>

          {/* Cart Icon */}
          <button className="p-2 relative">
            <FiShoppingCart className="text-2xl text-gray-700" />
            {/* Cart badge (for number of items) */}
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
          </button>

          {/* Hamburger Menu (Mobile) */}
          <button onClick={toggleMobileMenu} className="p-2 md:hidden focus:outline-none">
            {isMobileMenuOpen ? (
              <FiX className="text-2xl text-gray-700" /> // Close icon
            ) : (
              <FiMenu className="text-2xl text-gray-700" /> // Menu icon
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-64 h-full bg-white shadow-md z-50 flex flex-col p-6 md:hidden"
          >
            {/* Close Menu Button */}
            <button onClick={toggleMobileMenu} className="self-end mb-4">
              <FiX className="text-2xl text-gray-700" />
            </button>

            {/* Mobile Nav Links */}
            <a href="#home" className="py-2 text-gray-700 hover:text-gray-900">
              Home
            </a>
            <a href="#shop" className="py-2 text-gray-700 hover:text-gray-900">
              Shop
            </a>
            <a href="#about" className="py-2 text-gray-700 hover:text-gray-900">
              About
            </a>
            <a href="#contact" className="py-2 text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
