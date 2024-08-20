import React from 'react';
import Layout from './Layout';

function Highlights() {
  return (
    <Layout>
      <div className="promo-grid grid  grid-cols-12 gap-4 relative">
        <div className="overflow-hidden relative text-white col-span-12 md:col-span-6">
          <img
            alt=""
            src="https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2/"
            className="w-full object-cover object-center md:m-0 sm:m-0 promo-images"
          />
          <div className="absolute w-80 left-10 top-40 text-white">
            <h1 className="text-6xl pb-2">New Winter Collection</h1>
            {/* <button className="border border-black text-black hover:bg-black hover:text-white transition duration-300  hover:delay-150 py-2 px-6">
            Shop Now
          </button> */}
          </div>
          {/* <div className="absolute left-2 top-2 ">New Winter Collection</div> */}
        </div>

        <div className="overflow-hidden col-span-12 md:col-span-6">
          <img
            alt=""
            src="https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2/"
            className="w-full object-cover object-center promo-images"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Highlights;
