import React from 'react';
import { motion } from 'framer-motion';

const ShippingInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-6 bg-white rounded-lg shadow-md "
    >
      <h2 className="text-xl  mb-4">Shipping Information</h2>

      <div className="space-y-4">
        {/* Select Country */}

        {/* Address Inputs */}
        {/* <div>
          <label className="block text-sm ">Full Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter your full name"
          />
        </div> */}

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm ">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your full name"
            />
          </div>
        </div>

        {/* Additional fields: Phone, Street, City */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm ">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full p-2 border rounded mt-1"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm ">Email Address</label>
            <input
              type="email"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm ">City</label>
            <input
              type="text"
              className="w-full p-2 border rounded mt-1"
              placeholder="City"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm ">Street Address</label>
            <input
              type="text"
              className="w-full p-2 border rounded mt-1"
              placeholder="Street name and house number"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm ">Postal Code</label>
            <input
              type="text"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your postal code"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm ">Select Region</label>
            <select className="w-full p-2 border rounded mt-1">
              <option>Select region</option>
              {/* Add other region options here */}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm ">Postal Code</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter your postal code"
          />
        </div>

        {/* Shipping Method */}
        <fieldset className="mt-4">
          <legend className="text-sm ">Shipping Method</legend>
          <div className="mt-2 space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="shipping"
                value="free"
                className="mr-2"
              />
              Free Shipping (7-30 business days) - $0
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="shipping"
                value="regular"
                className="mr-2"
              />
              Regular Shipping (3-14 business days) - $7.50
            </label>
          </div>
        </fieldset>
      </div>
    </motion.div>
  );
};

export default ShippingInfo;
