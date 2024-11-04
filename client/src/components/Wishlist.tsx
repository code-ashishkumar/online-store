import React from 'react';
import { useWishlistStore } from '../stores/useWishlistStore';
import Layout from './Layout';
import Button from './Button';

const Wishlist = () => {
  const {
    wishlistItems,
    removeItemFromWishlist,
    clearWishlist,
    moveItemToCart,
  } = useWishlistStore();

  return (
    <Layout>
      <div className="container mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Wishlist Items */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Your Wishlist</h2>
          <div className="space-y-6">
            {wishlistItems.length > 0 ? (
              wishlistItems.map(({ id, name, price, image, color }) => (
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
                  <div className="flex space-x-4">
                    <button
                      onClick={() =>
                        moveItemToCart({ id, name, price, image, color })
                      }
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => removeItemFromWishlist(id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">
                Your wishlist is empty.
              </p>
            )}
          </div>
        </div>

        {/* Wishlist Summary */}
        <div className="p-6 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Wishlist Summary</h2>
          <p className="text-sm text-gray-500 mb-4">
            {wishlistItems.length}
            {wishlistItems.length === 1 ? 'item' : 'items'} in wishlist
          </p>
          {/* <button
            onClick={clearWishlist}
            className="w-full py-2 px-4 bg-gray-200 rounded"
          ></button> */}
          <Button title=" Clear Wishlist" handleOnClick={clearWishlist} />
        </div>
      </div>
    </Layout>
  );
};

export default Wishlist;
