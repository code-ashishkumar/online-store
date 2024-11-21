import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { FiMinus, FiPlus, FiTrash, FiX } from 'react-icons/fi';
import { useCartStore } from '../stores/cartStore';
import { useNavigate } from 'react-router-dom';

const CartSidebar: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  // Access cart state and actions from the Zustand store
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    totalPrice,
  } = useCartStore();

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div>
      {/* Cart Icon Button */}
      <div className="relative">
        
        <ShoppingBagIcon
          className="w-[22px] h-[22px] lg:h-6 lg:w-6 cursor-pointer"
          onClick={toggleCart}
        />
        <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {cartItems.length}
        </span>
      </div>

      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
              onClick={toggleCart}
            />
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{
                stiffness: 300,
                damping: 40,
                opacity: { duration: 0.3 },
              }}
              className="fixed top-0 right-0 w-80 h-full bg-gradient-to-tr from-white via-gray-50 to-gray-200 shadow-xl z-50 flex flex-col"
            >
              <div className="p-4 flex justify-between items-center border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">
                  Your Cart
                </h2>
                <button
                  onClick={toggleCart}
                  className="hover:text-red-500 transition duration-300"
                >
                  <FiX className="text-2xl text-gray-700" />
                </button>
              </div>

              <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                <AnimatePresence>
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 50 }}
                      transition={{ duration: 0.3 }}
                      className="flex justify-between items-center p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
                    >
                      <div>
                        <h3 className="text-gray-700">{item.name}</h3>
                        <p className="text-sm text-gray-500">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="p-1 bg-gray-200 rounded-full hover:bg-gray-300"
                        >
                          <FiMinus className="text-gray-600" />
                        </button>
                        <span className="text-gray-700 font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="p-1 bg-gray-200 rounded-full hover:bg-gray-300"
                        >
                          <FiPlus className="text-gray-600" />
                        </button>
                      </div>
                      <div className="flex items-center space-x-2">
                        <p className="text-gray-700 font-semibold">
                          ${item.price * item.quantity}
                        </p>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 text-red-500 hover:text-red-600"
                        >
                          <FiTrash />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="flex flex-col bg-gray-100 gap-2 p-4 border-t border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-md font-semibold text-gray-700">
                    Total: ${totalPrice()}
                  </p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-black text-white py-2 shadow-lg hover:shadow-xl transition duration-300"
                >
                  Proceed to Checkout
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full font-light bg-gray-200 text-black py-2 "
                  onClick={() => navigate('/cart')}
                >
                  View Cart
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CartSidebar;
