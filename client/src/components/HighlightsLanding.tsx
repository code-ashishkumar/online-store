import React from 'react';
import Layout from './Layout';

function HighlightsLanding() {
  return (
    <Layout>
      <div className="grid grid-cols-12 gap-4 relative pt-4">
        <div className="overflow-hidden relative text-white col-span-12 md:col-span-4 h-340">
          <img
            alt="New Winter Collection"
            src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-full object-cover object-center h-full"
          />
          <div className="absolute w-80 left-10 top-40 text-white">
            <h1 className="text-4xl pb-2">New Winter Collection</h1>
            {/* <button className="border border-black text-black hover:bg-black hover:text-white transition duration-300  hover:delay-150 py-2 px-6">
              Shop Now
            </button> */}
          </div>
        </div>

        <div className="overflow-hidden col-span-12 md:col-span-4 h-340">
          <img
            alt="Smiling Girl After Shopping"
            src="https://img.freepik.com/free-photo/smiling-girl-after-shopping_23-2147688872.jpg?ga=GA1.1.1469348413.1723813996&semt=ais_hybrid"
            className="w-full object-cover object-center h-full"
          />
        </div>
        <div className="overflow-hidden col-span-12 md:col-span-4 h-200">
          <img
            alt="Highlight Image"
            src="https://images.pexels.com/photos/6786616/pexels-photo-6786616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-full object-cover object-center h-full"
          />
        </div>
      </div>
    </Layout>
  );
}

export default HighlightsLanding;
