import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
  return (
    <>
      <motion.div
        className="w-full  overflow-hidden "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://media.istockphoto.com/id/1338067000/photo/fashion-studio-shot-of-a-blonde-model-woman-in-a-suit-isolated-at-the-brown-studio-background.jpg?s=2048x2048&w=is&k=20&c=tgIPC_P90oAOgPh1GLcHK-3AxS2Sa2wnRfdKV7yu81A="
          alt="About us"
          className="w-full h-[400px] object-cover object-top  shadow-lg"
        />
      </motion.div>
      <div className="py-6 flex flex-col items-center justify-center px-4">
        {/* Top Image Section */}

        {/* About Description Section */}
        <motion.div
          className="max-w-3xl text-center text-gray-800 space-y-11"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            About Our Store
          </h1>
          <p className=" text-gray-700 leading-relaxed">
            Welcome to [Your Store Name]! We are committed to bringing you the
            best quality products with a seamless shopping experience. Our
            mission is to provide exceptional customer service, premium quality
            products, and a shopping experience that makes you feel at home.
          </p>
          <p className=" text-gray-700 leading-relaxed">
            From the latest fashion trends to timeless essentials, we have
            something for everyone. Explore our curated collections and enjoy a
            journey of style, elegance, and comfort. Thank you for choosing us
            as your trusted shopping destination.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default About;
