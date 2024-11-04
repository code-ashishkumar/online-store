import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AddToCartButton = ({
  title,
  dark = false,
  wFull = false,
  handleAddToCart,
}: any) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      className={classNames(
        'p-4 rounded-full text-black cursor-pointer',
        {
          'bg-black': dark,
          'text-white': dark,
          'bg-gray-200': !dark,
          // 'xsm:w-full md:w-[400px]': !wFull,
          // 'w-full': wFull,
        },
      )}
    >
      <ShoppingBagIcon
        className="w-[22px] h-[22px]"
        onClick={handleAddToCart}
      />
      {title}
    </motion.div>
  );
};

export default AddToCartButton;
