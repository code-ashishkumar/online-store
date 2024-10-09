// src/components/CartSidebar.tsx
import React, { useState } from 'react';
import { FiShoppingCart, FiX, FiTrash, FiPlus, FiMinus } from 'react-icons/fi'; // Cart, Close, Remove, and Quantity Icons
import { motion, AnimatePresence } from 'framer-motion'; // Framer Motion for animations
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

// Initial cart items
const initialCartItems = [
  { id: 1, name: 'Item 1', price: 50, quantity: 1 },
  { id: 2, name: 'Item 2', price: 30, quantity: 1 },
];

const CartSidebar: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Toggle the cart sidebar
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Handle quantity increase
  const increaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Handle quantity decrease
  const decreaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Handle item removal
  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      {/* Cart Icon Button */}
      <button onClick={toggleCart} className="p-2 relative">
        {/* <FiShoppingCart className="text-2xl text-gray-700" /> */}
           <ShoppingBagIcon className="w-[22px] h-[22px] lg:h-6 lg:w-6" />
        {/* Cart badge (for number of items) */}
        <span className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {cartItems.length}
        </span>
      </button>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }} // Start off the screen (right)
            animate={{ x: 0, opacity: 1 }} // Slide in from the right
            exit={{ x: '100%', opacity: 0 }} // Slide out to the right
            transition={{
              type: 'spring', // Spring animation for bouncy effect
              stiffness: 300,
              damping: 30,
              opacity: { duration: 0.3 },
            }}
            className="fixed top-0 right-0 w-80 h-full bg-gradient-to-tr from-white via-gray-50 to-gray-200 shadow-xl z-50 flex flex-col"
          >
            {/* Close Cart Button */}
            <div className="p-4 flex justify-between items-center border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">Your Cart</h2>
              <button onClick={toggleCart} className="hover:text-red-500 transition duration-300">
                <FiX className="text-2xl text-gray-700" />
              </button>
            </div>

            {/* Cart Content */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }} // Start hidden and lower down
                    animate={{ opacity: 1, y: 0 }} // Fade-in and move up
                    exit={{ opacity: 0, y: 50 }} // Fade-out and move down
                    transition={{ duration: 0.3 }}
                    className="flex justify-between items-center p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  >
                    {/* Item Info */}
                    <div>
                      <h3 className="text-gray-700">{item.name}</h3>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <button onClick={() => decreaseQuantity(item.id)} className="p-1 bg-gray-200 rounded-full hover:bg-gray-300">
                        <FiMinus className="text-gray-600" />
                      </button>
                      <span className="text-gray-700 font-semibold">{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)} className="p-1 bg-gray-200 rounded-full hover:bg-gray-300">
                        <FiPlus className="text-gray-600" />
                      </button>
                    </div>

                    {/* Price and Remove Button */}
                    <div className="flex items-center space-x-2">
                      <p className="text-gray-700 font-semibold">${item.price * item.quantity}</p>
                      <button onClick={() => removeItem(item.id)} className="p-1 text-red-500 hover:text-red-600">
                        <FiTrash />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Checkout Section */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-semibold text-gray-700">Total: ${totalPrice}</p>
              </div>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: '#3b82f6',
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                Proceed to Checkout
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CartSidebar;
