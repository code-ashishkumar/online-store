import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ProductCard({product} : any) {
  return (
    <div key={product.id} className=" shadow-sm">
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-[222px] object-cover  mb-4"
    />
    <div className='min-h-28'>

 
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
    <button className="bg-black text-white py-2 px-4  hover:bg-gray-800 w-full">
      Add to Cart
    </button>
  </div>
  )
}

export default ProductCard
