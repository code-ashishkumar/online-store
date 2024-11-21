import React from 'react';
import { motion } from 'framer-motion';

const PaymentInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-6 bg-white rounded-lg shadow-md max-w-xl mx-auto mt-8"
    >
      <h2 className="text-xl font-semibold mb-4">Payment Information</h2>

      <fieldset className="space-y-4">
        <legend className="text-sm font-medium">Select Payment Methods</legend>

        {/* Credit Card Option */}
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="payment"
              value="credit"
              className="mr-2"
            />
            Credit Card
          </label>
          <div className="space-y-2 ml-6">
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Card number"
            />
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Name on card"
            />
            <div className="flex gap-4">
              <input
                type="text"
                className="flex-1 p-2 border rounded"
                placeholder="Expiration date (MM/YY)"
              />
              <input
                type="text"
                className="flex-1 p-2 border rounded"
                placeholder="CVV"
              />
            </div>
          </div>
        </div>

        {/* PayPal Option */}
        <div>
          <label className="flex items-center">
            <input
              type="radio"
              name="payment"
              value="paypal"
              className="mr-2"
            />
            PayPal
          </label>
        </div>

        {/* Neteller Option */}
        <div>
          <label className="flex items-center">
            <input
              type="radio"
              name="payment"
              value="neteller"
              className="mr-2"
            />
            Neteller
          </label>
        </div>
      </fieldset>
    </motion.div>
  );
};

export default PaymentInfo;
