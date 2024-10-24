import React from 'react';
import { motion } from 'framer-motion';
import Layout from './Layout';

const ProductDetails = () => {
  return (
    <Layout>
      {/* Breadcrumb Section */}
      {/* <div className="text-sm text-gray-500 mb-4">
        Clothes and shoes {'>'} Shoes {'>'} Reebok
      </div> */}

      {/* Product Display */}
      <div className="grid py-4 lg:grid-cols-2 xsm:grid-cols-1  gap-11">
        {/* Left Column - Product Images */}
        <div className="space-y-4 w-full">
          <motion.img
            className="w-full lg:h-[600px] xsm:h-[500px] object-cover object-top "
            src="https://media.istockphoto.com/id/990534538/photo/beautiful-blonde-woman-posing-in-a-pink-coat-on-a-beige-background-fashion-show-clothing-woman.jpg?s=612x612&w=0&k=20&c=yNqX5CfwYWSkX-4P2LBjftMa5-s-jg0LwxZN5-0Kv8Y="
            alt="Product"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <motion.img
                key={item}
                className="lg:h-[400px] w-full xsm:h-[200px] md:h-[360px]  object-cover object-top cursor-pointer"
                src={`https://media.istockphoto.com/id/990534538/photo/beautiful-blonde-woman-posing-in-a-pink-coat-on-a-beige-background-fashion-show-clothing-woman.jpg?s=612x612&w=0&k=20&c=yNqX5CfwYWSkX-4P2LBjftMa5-s-jg0LwxZN5-0Kv8Y=`}
                alt={`Thumbnail ${item}`}
                whileHover={{ scale: 1.0 }}
              />
            ))}
          </div>
          {/* Thumbnail Gallery */}
        </div>

        {/* Right Column - Product Information */}
        <div className="w-full ">
          <h1 className="text-3xl  font-bold">Shoes Reebok Zig Kinetica 3</h1>
          <div className="flex w-full justify-between align-center py-4">
            <div className="text-2xl font-bold text-gray-900">$199.00</div>
            <div className="text-yellow-400 py-1 text-1xl">
              ⭐⭐⭐⭐⭐ 42 reviews
            </div>
          </div>
          <div className="space-y-6">
            {/* Color Options */}
            <p className="text-sm   ">Shoes Zig Kinetica 3</p>
            <p className="text-sm   ">Shoes Zig Kinetica 3</p>
            <div className="space-y-6">
              <span className="font-bold">Color:</span> White
              <div className="flex space-x-4 mt-2">
                <div className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer"></div>
                <div className="w-10 h-10 rounded-full bg-gray-800 cursor-pointer"></div>
                <div className="w-10 h-10 rounded-full bg-gray-500 cursor-pointer"></div>
              </div>
            </div>

            {/* Size Options */}
            <div className="grid lg:grid-cols-2 xsm:grid-cols-1 gap-2">
              <div className="space-y-6">
                <span className="font-bold">Size:</span> EU Men
                <div className="grid lg:grid-cols-6 xsm:grid-cols-4 gap-2 mt-2">
                  {['40', '41', '42', '43', '44', '45', '46'].map((size) => (
                    <button
                      key={size}
                      className="border border-gray-300 px-4 py-2  hover:bg-gray-200"
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {/* {['XSM', 'SM', 'MD', 'L', 'XL', 'XLL'].map((size) => (
                  <button
                    key={size}
                    className="border border-gray-300 px-4 py-2  hover:bg-gray-200"
                  >
                    {size}
                  </button>
                ))} */}
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="">
            <div className="text-sm text-gray-500 py-6  ">
              Free delivery on orders over $30.00
            </div>
            <button className="w-full bg-black text-white py-3  hover:bg-gray-800">
              Add to Cart
            </button>
          </div>

          {/* Delivery Info */}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
