import React, { useState } from 'react';
import { useCartStore } from '../stores/cartStore';
import Layout from './Layout';
import { useNavigate } from 'react-router-dom';
import ShippingInfo from './ShippingInfo';

const CartDetails = () => {
  const navigate = useNavigate();
  const [isCheckOut, setIsCheckOut] = useState(false);
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart,
    totalPrice,
  } = useCartStore();

  const handleCheckoutClick = () => {
    setIsCheckOut(!isCheckOut);
  };

  return (
    <Layout>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

          <div className="space-y-6">
            {!isCheckOut ? (
              cartItems.length > 0 ? (
                cartItems.map(({ id, name, price, quantity, image, color }) => (
                  <div
                    key={id}
                    className="flex items-center justify-between border-b pb-4"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={image}
                        alt={name}
                        className="w-16 h-16 rounded-md"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{name}</h3>
                        <p className="text-sm text-gray-500">{color}</p>
                        <p className="text-sm text-gray-500">
                          ${price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => decreaseQuantity(id)}
                        className="px-2 py-1 border rounded"
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                        onClick={() => increaseQuantity(id)}
                        className="px-2 py-1 border rounded"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(id)}
                        className="px-2 py-1 text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="text-lg font-semibold">
                      ${(price * quantity).toFixed(2)}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">Your cart is empty.</p>
              )
            ) : (
              <ShippingInfo />
            )}
          </div>
        </div>

        {/* Cart Summary */}
        <div className="p-6 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${totalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$10.00</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-semibold">
              <span>Total</span>
              <span>${(totalPrice() + 10).toFixed(2)}</span>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <button
              className="w-full py-2 px-4 bg-black text-white rounded"
              // onClick={() => navigate()}
              onClick={handleCheckoutClick}
            >
              Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full py-2 px-4 bg-gray-200 rounded"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartDetails;
