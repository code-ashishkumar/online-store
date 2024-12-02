'use client';

import {
  HeartIcon,
  UserCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import classnames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useScroll } from '../hooks/useScroll.ts';
import CartSidebar from './Cart';
import SearchBar from './Search';

const CatagoriesTrend = [
  {
    name: 'NEW ARRIVALS',
    href: 'newArrivals',
  },
  {
    name: 'T-Shirts',
    href: 'tShirts',
  },
  {
    name: 'Shirts',
    href: 'shirts',
  },
  {
    name: 'Shoes',
    href: 'shoes',
  },
  {
    name: 'Belts',
    href: 'belts',
  },
  {
    name: 'Purse',
    href: 'purse',
  },
  {
    name: 'Bags',
    href: 'bags',
  },
  {
    name: 'Sports',
    href: 'sports',
  },
];

const CatagoriesMen = [
  {
    name: 'Shirts',
    href: 'shirts',
  },
  {
    name: 'T-Shirts',
    href: 't-shirts',
  },
  {
    name: 'Shoes',
    href: 'shoes',
  },
  {
    name: 'Winter',
    href: 'winter',
  },
  {
    name: 'Summer',
    href: 'summer',
  },
  {
    name: 'Night',
    href: 'night',
  },
  {
    name: 'Sports',
    href: 'sports',
  },
];

const CatagoriesWomen = [
  {
    name: 'Dresses',
    href: 'dresses',
  },
  {
    name: 'Shirts',
    href: 'shirts',
  },
  {
    name: 'T-Shirts',
    href: 't-shirts',
  },
  {
    name: 'Shoes',
    href: 'shoes',
  },
  {
    name: 'Winter',
    href: 'winter',
  },
  {
    name: 'Summer',
    href: 'summer',
  },
  {
    name: 'Night',
    href: 'night',
  },
  {
    name: 'Sports',
    href: 'sports',
  },
];


const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [currentMenu, setCurrentMenu] = useState('main'); // Tracks current menu state
  const [openSubItems, setOpenSubItems] = useState({});
  const [direction, setDirection] = useState('right'); // Tracks animation direction

  // Toggle a submenu section within a submenu
  const handleToggleSubItem = (subItem) => {
    setOpenSubItems((prev) => ({
      ...prev,
      [subItem]: !prev[subItem],
    }));
  };

  // Handle submenu toggle with animation direction
  const handleSubMenu = (menuName) => {
    setDirection('right');
    setCurrentMenu(menuName);
  };

  // Handle back navigation with animation direction
  const handleBackToMain = () => {
    setDirection('left');
    setCurrentMenu('main');
    setOpenSubItems({});
  };

  // Sidebar animation variants
  const sidebarVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0 },
  };

  // Right-to-left and left-to-right animations for submenu transitions
  const subMenuVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === 'right' ? 100 : -100,
    }),
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction === 'right' ? -100 : 100,
    }),
  };

  // Dummy data for sub-menus
  const subMenuData = {
    MEN: ['FEATURED', 'CLOTHING', 'SHOES', 'ACCESSORIES'],
    WOMEN: ['NEW ARRIVALS', 'CLOTHING', 'ACCESSORIES', 'SALE'],
  };

  return (
    <motion.div
      className={`fixed top-0 left-0 z-50 w-80 bg-white shadow-lg h-full transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      initial="hidden"
      animate={isOpen ? 'visible' : 'hidden'}
      variants={sidebarVariants}
    >
      {/* Header with Close Button */}
      <div className="flex justify-between p-4 border-b">
        <h2 className="text-xl font-semibold">
          {currentMenu === 'main' ? 'Menu' : currentMenu}
        </h2>
        <button onClick={toggleSidebar} className="text-xl">
          ✕
        </button>
      </div>

      {/* Main Menu */}
      {currentMenu === 'main' ? (
        <AnimatePresence custom={direction}>
          <motion.div
            className="p-4 space-y-4"
            key="main"
            initial="hidden"
            animate={currentMenu === 'main' ? 'visible' : 'hidden'}
            exit="exit"
            custom={direction}
            variants={subMenuVariants}
          >
            {[
              '3 FOR 2',
              'SUMMER',
              'SHOP UNDER R1000',
              'OUTDOOR CLUB',
              'FOM x KOLISI',
            ].map((item) => (
              <div key={item} className="text-sm cursor-pointer">
                {item}
              </div>
            ))}

            {/* Dropdown Items like MEN and WOMEN */}
            <div
              onClick={() => handleSubMenu('MEN')}
              className="flex items-center justify-between text-sm cursor-pointer"
            >
              <span>MEN</span>
              <ChevronRightIcon className="w-5 h-5" />
            </div>

            <div
              onClick={() => handleSubMenu('WOMEN')}
              className="flex items-center justify-between text-sm cursor-pointer"
            >
              <span>WOMEN</span>
              <ChevronRightIcon className="w-5 h-5" />
            </div>
          </motion.div>

          {/* Sub-Menu with Animation */}
        </AnimatePresence>
      ) : (
        <motion.div
          className="p-4 h-auto"
          key="submenu"
          initial="hidden"
          animate={currentMenu !== 'main' ? 'visible' : 'hidden'}
          exit="exit"
          custom={direction}
          variants={subMenuVariants}
        >
          {/* Back Button */}
          <div
            onClick={handleBackToMain}
            className="flex items-center cursor-pointer mb-4 text-sm"
          >
            <ChevronRightIcon className="w-5 h-5 transform rotate-180 mr-2" />
            <span>Back</span>
          </div>

          {/* Display Sub-Menu Items */}
          {subMenuData[currentMenu]?.map((subItem) => (
            <div key={subItem} className="flex flex-col">
              <div
                onClick={() => handleToggleSubItem(subItem)}
                className="flex space-y-4 items-center justify-between text-sm cursor-pointer"
              >
                <span>{subItem}</span>
                {openSubItems[subItem] ? (
                  <ChevronDownIcon className="w-5 h-5" />
                ) : (
                  <ChevronRightIcon className="w-5 h-5" />
                )}
              </div>

              {/* Collapsible Items with Animation */}
              <AnimatePresence>
                {openSubItems[subItem] && (
                  <motion.div
                    className="pl-4 space-y-2 text-sm text-gray-600"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                      hidden: { opacity: 0, height: 0 },
                      visible: { opacity: 1, height: 'auto' },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div>Option 1</div>
                    <div>Option 2</div>
                    <div>Option 3</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default function Header() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSortingOpen, setIsSortingOpen] = useState(false);
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
    { label: 'TRENDING', link: 'TRENDING', submenu: CatagoriesTrend },

    { label: 'MEN', link: 'MEN', submenu: CatagoriesMen },
    { label: 'WOMEN', link: 'WOMEN', submenu: CatagoriesWomen },
    // { label: 'ACCESSESORIES', link: 'ACCESSESORIES', submenu: CatagoriesAcc },
    {
      label: 'ABOUT',
      link: 'ABOUT',
      // submenu: ['Our Story', 'Mission', 'Team'],
    },
    { label: 'BLOG', link: 'BLOG' },
  ];

  const navigate = useNavigate();

  const UserCircle = () => {
    const handleSortClick = () => {
      setIsSortingOpen(!isSortingOpen);
    };

    // const handleClickOutside = (event: MouseEvent) => {
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   const path: any = event.composedPath && event.composedPath(); // Browser compatibility check for event path
    //   if (
    //     path &&
    //     !path.some(
    //       // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //       (element: any) => (element as any) && element?.dataset?.dropdown,
    //     )
    //   ) {
    //     setIsSortingOpen(false);
    //   }
    // };

    // useEffect(() => {
    //   if (isSortingOpen) {
    //     document.addEventListener('mousedown', handleClickOutside);
    //   } else {
    //     document.removeEventListener('mousedown', handleClickOutside);
    //   }

    //   return () => {
    //     document.removeEventListener('mousedown', handleClickOutside);
    //   };
    // }, [isSortingOpen]);

    return (
      <>
        <button>
          <UserCircleIcon
            className="w-[22px] h-[22px] cursor-pointer"
            onClick={handleSortClick}
          />
        </button>

        <AnimatePresence>
          {isSortingOpen && (
            <motion.div
              className="absolute right-[240px] top-[75px] z-10  w-56 shadow-lg bg-white "
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex={-1}
            >
              <div className="py-1" role="none">
                <a
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-0"
                  onClick={() => navigate('/account-details')}
                >
                  Account settings
                </a>

                <button
                  type="submit"
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-3"
                  onClick={() => navigate('/')}
                >
                  Sign out
                </button>
                <button
                  type="submit"
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-3"
                  onClick={() => navigate('/login')}
                >
                  Sign In
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  };

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
            <h6 onClick={() => navigate('/')} className="cursor-pointer text-2xl italic">
              Fashion
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
            {menuItems.map((item: any, index) => {
              return (
                <div
                  className="relative h-full leading-6 text-gray-900 hover:text-gray-900"
                  onMouseEnter={() => onMenuMouseEnter(index)}
                  // onMouseLeave={() => handleMouseLeave()}
                >
                  {/* <a href="#men" onMouseEnter={() => onMenuMouseEnter(index)}>
                    {item.label}
                  </a> */}
                  <Link
                    key={index}
                    className="text-gray-700 hover:text-black "
                    to={
                      item.label === 'ABOUT' || item.label === 'BLOG'
                        ? item.label.toLowerCase()
                        : `/product/${item.label}`
                    }
                    // onMouseLeave={() => setAcitve(null)}
                  >
                    {item.label}
                  </Link>
                  {index === acitve && !item.submenu && (
                    <motion.div
                      initial={{ opacity: 0, x: 0, width: '4%' }} // Start from full parent width
                      animate={{ opacity: 1, x: 0, width: `auto` }} // Animate to child width
                      exit={{ opacity: 0, x: 0, width: '100%' }} // Exit back to full width
                      className="absolute bottom-0 top-[34px] right-0 left-0 bg-black h-[2px]"
                    ></motion.div>
                  )}

                  {/* Dropdown Menu */}
                  {acitve === index && item.submenu && (
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
                          to={`/product/${submenuItem.href}`}
                          // onMouseLeave={() => setAcitve(null)}
                        >
                          {submenuItem.name}
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
          <div className="flex space-x-2 lg:space-x-3 justify-center  items-center">
            <SearchBar />
            <HeartIcon
              className="w-[22px] h-[22px]  cursor-pointer"
              onClick={() => navigate('/wishlist')}
            />

            <CartSidebar />

            <UserCircle />
          </div>
        </div>

        <Sidebar
          isOpen={isMobileMenuOpen}
          toggleSidebar={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu */}
        {/* <AnimatePresence>
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
                <button onClick={toggleMobileMenu} className="self-end mb-4">
                  <FiX className="text-2xl text-gray-700" />
                </button>

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
        </AnimatePresence> */}
      </header>
    </>
  );
}
