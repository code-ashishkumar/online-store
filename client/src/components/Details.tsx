import {
  ArrowPathIcon,
  PhoneArrowDownLeftIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import Layout from './Layout';

function Details() {
  return (
    <Layout>
      <div className="flex  flex-row flex-wrap w-full text-center justify-between items-center ">
        <div className="d-block text-center w-full">
          <h2 className="d-block text-5xl mb-5 leading-snug">
            Sale Live Autumn’24
          </h2>
          {/* <div className="">
            <p>The Urbanist Madrid features a true Scandinavian look. </p>
          </div> */}
        </div>{' '}
        {/* <div className="d-block text-center w-full">
          <h2 className="d-block text-5xl mb-5 leading-snug">
            Latest Arrivals <br /> Autumn’24
          </h2>
          <div className="">
            <p>The Urbanist Madrid features a true Scandinavian look. </p>
          </div>
        </div> */}
        {/* <div className="flex flex-col w-60   flex-wrap items-center p-4 ">
          <TruckIcon className="h-10 w-10 text-gray-600" />
          <h1 className="text-2xl text-bold p-1 leading-6">Free Sheeping</h1>
          <p className="text-md text-gray-600 tracking-wide">
            For all Orders Over $100
          </p>
        </div>
        <div className="flex flex-col w-60    flex-wrap items-center p-4  ">
          <ArrowPathIcon className="h-10 w-10" />
          <div className="p-4">Free Sheeping</div>
        </div>
        <div className="flex flex-col w-60    flex-wrap items-center p-4  ">
          <PhoneArrowDownLeftIcon className="h-10 w-10" />
          <div className="p-4">Support</div>
        </div> */}
      </div>
      {/* <div className="flex flex-col items-center">
        <ArrowPathIcon className="h-10 w-10" />
        <div className="p-4">Free Sheeping</div>
      </div> */}
    </Layout>
  );
}

export default Details;
