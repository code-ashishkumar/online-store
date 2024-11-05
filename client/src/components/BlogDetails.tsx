import React from 'react';
import { motion } from 'framer-motion';

const BlogDetails = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Header Image */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full "
      >
        <img
          src="https://media.istockphoto.com/id/1338067000/photo/fashion-studio-shot-of-a-blonde-model-woman-in-a-suit-isolated-at-the-brown-studio-background.jpg?s=2048x2048&w=is&k=20&c=tgIPC_P90oAOgPh1GLcHK-3AxS2Sa2wnRfdKV7yu81A="
          // Replace with actual image URL
          alt="Blog header"
          className="w-full h-[470px] object-cover object-top shadow-lg"
        />
      </motion.div>

      {/* Blog Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full p-6 mt-6  max-w-7xl"
      >
        {/* Title */}
        <h1 className="text-3xl font-lite text-gray-800 pb-4">
          The Journey of a Modern Designer
        </h1>

        {/* Author and Date */}
        <div className="text-gray-500 mb-4">
          <p className="flex gap-2 text-sm">
            By <span className="font-bold text-gray-700">Owner</span>{' '}
            <p className="text-sm">April 15, 2023</p>
          </p>
          
        </div>

        {/* Main Content */}
        <div className="text-gray-600 text-sm m-auto leading-relaxed space-y-2 max-w-7xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel
            risus eu nisl gravida facilisis. Aenean vel ex nec nulla condimentum
            sollicitudin.
          </p>
          <p>
            Curabitur ut metus fermentum, elementum est vel, tincidunt leo.
            Nullam nec sapien vel purus tristique malesuada. Nam id ligula ut
            ipsum congue interdum nec eget eros.
          </p>
          <p>
            Praesent non urna lectus. Nullam convallis, dui id dapibus aliquet,
            urna mi varius enim, ut vehicula augue tortor vel est.
          </p>
          <p>
            Vivamus eu lorem vitae orci bibendum feugiat. Suspendisse viverra
            venenatis est, eget accumsan turpis.
          </p>
          <p>
            In egestas augue in ipsum bibendum, in egestas elit tincidunt. Cras
            in facilisis eros, sit amet fringilla velit. Morbi euismod metus nec
            fermentum facilisis.
          </p>
          <p>
            In egestas augue in ipsum bibendum, in egestas elit tincidunt. Cras
            in facilisis eros, sit amet fringilla velit. Morbi euismod metus nec
            fermentum facilisis.
          </p>
          <p>
            In egestas augue in ipsum bibendum, in egestas elit tincidunt. Cras
            in facilisis eros, sit amet fringilla velit. Morbi euismod metus nec
            fermentum facilisis.
          </p>
          <p>
            In egestas augue in ipsum bibendum, in egestas elit tincidunt. Cras
            in facilisis eros, sit amet fringilla velit. Morbi euismod metus nec
            fermentum facilisis.
          </p>
          <p>
            In egestas augue in ipsum bibendum, in egestas elit tincidunt. Cras
            in facilisis eros, sit amet fringilla velit. Morbi euismod metus nec
            fermentum facilisis.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogDetails;
