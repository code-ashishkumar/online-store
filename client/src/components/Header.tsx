'use client';

import {
  PhoneIcon,
  PlayCircleIcon
} from '@heroicons/react/20/solid';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { AnimatePresence, calcLength, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi'; // Icons from react-icons
import CartSidebar from './Cart';
import SearchBar from './Search';
import classnames from "classnames";
import useScroll from "../hooks/useScroll"

const products = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will convert',
    href: '#',
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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

  useScroll(isMobileMenuOpen)

  console.log(isSticky)


  return (
    <><div className="bg-black p-2 w-full text-center text-white text-sm">
      <h6> Newly Launched</h6>
    </div><header className={classnames(
      'navbar bg-white shadow-md w-full top-0 z-50 transition-all duration-300 ease-in-out',
      { fixed: isSticky }
    )}>

        <div className="container mx-auto px-11 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <h6>Logo</h6>
          </div>

          {/* Navigation Links (hidden on mobile) */}
          <nav className="hidden md:flex  text-sm space-x-8">
            <a href="#men" className="leading-6 text-gray-900 hover:text-gray-900">
              MEN
            </a>
            <a href="" className="leading-6 text-gray-900 hover:text-gray-900">
              WOMEN
            </a>
            <a href="#about" className="leading-6 text-gray-900 hover:text-gray-900">
              About
            </a>
            <a href="#blog" className="leading-6 text-gray-900 hover:text-gray-900">
              BLOG
            </a>
          </nav>

          {/* Icons */}
          <div className="flex space-x-2 items-center">
            <SearchBar />

            <CartSidebar />

            <button onClick={toggleMobileMenu} className="p-2 md:hidden focus:outline-none">
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-[22px] h-[22px] text-gray-700" /> // Close icon


              ) : (
                <Bars3Icon className="w-[22px] h-[22px] text-gray-700" /> // Menu icon
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
      </header></>
  );
}
