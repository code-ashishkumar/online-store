import classNames from 'classnames';
import React, { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ProductCard({ product, showAddToCart = false }: any) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div key={product.id} className=" h-[400px]   md:h-[416px] ">
      <img
        src={isHovered ? product?.subImage : product.image}
        alt={product.title}
        className="w-full 
          xsm:h-[216px] 
              sm:h-[298px] 
              md:h-[260px] 
              lg:h-[233px] 
              xl:h-[207px] object-cover object-top  mb-4 max-w-none"
        // className="w-full h-fit object-cover  mb-4 max-w-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <div className="min-h-28">
        <h3 className="text-sm  mb-2">{product.title}</h3>
        <p className="text-sm text-gray-700 mb-4">{product.price}</p>
      </div>
      {/* {product.sizes.length > 0 && (
      <div className="mb-4">
        <p className="text-gray-600 mb-2">Sizes:</p>
        <div className="flex-1  space-y-2 px-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              className="border px-4 py-1 mx-1 text-sm  hover:bg-gray-100"
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    )} */}

      <button
        className={classNames(
          'bg-black text-white py-2 px-4 hover:bg-gray-800 w-full', // Default classes
          { hidden: !showAddToCart }, // Conditional class: 'hidden' applied if showAddToCart is false
        )}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
