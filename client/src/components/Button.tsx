import classNames from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button = ({ title, dark = false, wFull = false, handleOnClick }: any) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={classNames('py-2 px-6 text-black', {
        'bg-black': dark,
        'text-white': dark,
        'bg-gray-200': !dark,
        'xsm:w-full md:w-[400px]': !wFull,
        'w-full': wFull,
      })}
      onClick={handleOnClick}
    >
      {title}
    </motion.button>
  );
};

export default Button;
