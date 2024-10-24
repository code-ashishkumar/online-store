'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import classnames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi'; // Icons from react-icons
import { useScroll } from '../hooks/useScroll.ts';
import CartSidebar from './Cart';
import SearchBar from './Search';
import { Link, useNavigate } from 'react-router-dom';

// const products = [
//   {
//     name: 'Analytics',
//     description: 'Get a better understanding of your traffic',
//     href: '#',
//     icon: ChartPieIcon,
//   },
//   {
//     name: 'Engagement',
//     description: 'Speak directly to your customers',
//     href: '#',
//     icon: CursorArrowRaysIcon,
//   },
//   {
//     name: 'Security',
//     description: 'Your customers’ data will be safe and secure',
//     href: '#',
//     icon: FingerPrintIcon,
//   },
//   {
//     name: 'Integrations',
//     description: 'Connect with third-party tools',
//     href: '#',
//     icon: SquaresPlusIcon,
//   },
//   {
//     name: 'Automations',
//     description: 'Build strategic funnels that will convert',
//     href: '#',
//     icon: ArrowPathIcon,
//   },
// ];

// const callsToAction = [
//   { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//   { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ];

export default function Header() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [acitve, setAcitve] = useState(null);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const onMenuMouseEnter = (index: number) => {
    setAcitve(index);
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useScroll(isMobileMenuOpen);

  const menuItems = [
    { label: 'MEN', link: 'MEN', submenu: ['Shirts', 'Pants', 'Accessories'] },
    { label: 'WOMEN', link: 'WOMEN', submenu: ['Dresses', 'Shoes', 'Bags'] },
    {
      label: 'ABOUT',
      link: 'ABOUT',
      submenu: ['Our Story', 'Mission', 'Team'],
    },
    { label: 'BLOG', link: 'BLOG', submenu: ['Latest News', 'Trends', 'Tips'] },
  ];

  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black p-2 w-full text-center text-white text-sm">
        <h6> Newly Launched</h6>
      </div>
      <header
        className={classnames(
          'navbar bg-white shadow-md w-full top-0 z-50 transition-all duration-300 ease-in-out',
          { fixed: isSticky },
        )}
      >
        <div
          onMouseLeave={() => setAcitve(null)}
          className="mx-auto lg:max-w-6xl lg:px-11 px-5 flex items-center justify-between h-12"
        >
          {/* Logo */}
          <div className="hidden lg:block  font-bold">
            <h6 onClick={() => navigate('/')} className="cursor-pointer">
              Logo
            </h6>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden min-w-[40px] focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="min-w-[24px] h-[22px] text-gray-700 p-2 text-2xl" /> // Close icon
            ) : (
              // <Bars3Icon className="w-[22px] h-[22px] text-gray-700" /> // Menu icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 min-w-[24px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
          {/* Navigation Links (hidden on mobile) */}
          <nav className="hidden lg:flex items-center justify-between  text-sm space-x-8">
            {menuItems.map((item, index) => {
              return (
                <div
                  className="relative h-full leading-6 text-gray-900 hover:text-gray-900"
                  onMouseEnter={() => onMenuMouseEnter(index)}
                  // onMouseLeave={() => handleMouseLeave()}
                >
                  <a href="#men" onMouseEnter={() => onMenuMouseEnter(index)}>
                    {item.label}
                  </a>

                  {/* Dropdown Menu */}
                  {acitve === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute  top-full mt-[11px] bg-white shadow-lg p-4  rounded-md w-48 z-10"
                      onMouseEnter={() => onMenuMouseEnter(index)} // Keep dropdown open when hovering over it
                      // onMouseLeave={() => setAcitve(null)}
                    >
                      {index === acitve && (
                        <motion.div
                          initial={{ opacity: 0, x: 0, width: '4%' }} // Start from full parent width
                          animate={{ opacity: 1, x: 0, width: `192px` }} // Animate to child width
                          exit={{ opacity: 0, x: 0, width: '100%' }} // Exit back to full width
                          className="absolute top-0 right-0 left-0 bg-black h-[2px]"
                        ></motion.div>
                      )}
                      {item.submenu.map((submenuItem, subIndex) => (
                        <Link
                          key={subIndex}
                          className="block text-gray-700 hover:text-black py-1"
                          to={`/product/${submenuItem}`}
                          // onMouseLeave={() => setAcitve(null)}
                        >
                          {submenuItem}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              );
            })}

            {/* <a
              href="#men"
              className="leading-6 text-gray-900 hover:text-gray-900"
            >
              MEN
            </a>
            <motion.div className="absolute bottom-0 right-0 left-0 bg-black h-1"></motion.div>
            <a href="" className="leading-6 text-gray-900 hover:text-gray-900">
              WOMEN
            </a>
            <a
              href="#about"
              className="leading-6 text-gray-900 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#blog"
              className="leading-6 text-gray-900 hover:text-gray-900"
            >
              BLOG
            </a> */}
            {/* Click outside to close the dropdown */}
          </nav>
          <div className=" md:hidden text-2xl font-bold">
            <h6>Logo</h6>
          </div>
          {/* Icons */}
          <div className="flex space-x-2 lg:space-x-4  items-center">
            <SearchBar />

            <CartSidebar />
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" // Blur background with black overlay
                onClick={toggleMobileMenu} // Close search bar when clicking outside
              />
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
                <a
                  href="#home"
                  className="py-2 text-gray-700 hover:text-gray-900"
                >
                  Home
                </a>
                <a
                  href="#shop"
                  className="py-2 text-gray-700 hover:text-gray-900"
                >
                  Shop
                </a>
                <a
                  href="#about"
                  className="py-2 text-gray-700 hover:text-gray-900"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="py-2 text-gray-700 hover:text-gray-900"
                >
                  Contact
                </a>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
