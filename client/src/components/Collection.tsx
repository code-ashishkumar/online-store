import React from 'react';
import Layout from './Layout';

function Collection() {
  return (
    <>
      <h2 className="text-center text-2xl font-bold mb-2">COLLECTION</h2>
      <p className="text-center text-gray-600 mb-8">
        SHOP NOW COLLECTION
      </p>
      <div className="grid  grid-cols-12 gap-4 relative  ">
        <div className="overflow-hidden relative text-white col-span-12 md:col-span-6">
          <img
            alt=""
            src="https://media.istockphoto.com/id/802386776/photo/handsome-young-caucasian-man-smiling-and-posing-with-hands-in-pockets.jpg?s=2048x2048&w=is&k=20&c=rGpzxGRlxGLRLDwJYaAeIhTqbR37Mq554fwkL3qbWm0="
            className="w-full  h-screen object-cover object-top md:m-0 sm:m-0 "
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl pb-4">MEN</h1>
            <button className="bg-white text-black transition duration-100 hover:delay-20 py-2 px-6">
              Shop Now
            </button>
          </div>
          {/* <div className="absolute left-2 top-2 ">New Winter Collection</div> */}
        </div>

        <div className="overflow-hidden relative text-white col-span-12 md:col-span-6">
          <img
            alt=""
            src="https://media.istockphoto.com/id/1186159225/photo/elegant-woman-posing-in-beige-autumn-coat-on-grey.jpg?s=2048x2048&w=is&k=20&c=_DS3AgcGr3frdQ4Z3UzBmahCT7z5LL2SnK21hTQXnyQ="
            className="w-full  h-screen object-cover object-top md:m-0 sm:m-0 "
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl pb-4">WOMEN</h1>
            <button className="bg-white text-black transition duration-100 hover:delay-20 py-2 px-6">
              Shop Now
            </button>
          </div>
          {/* <div className="absolute left-2 top-2 ">New Winter Collection</div> */}
        </div>
      </div>
    </>
  );
}

export default Collection;
