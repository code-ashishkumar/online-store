import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from './Layout';
import ReactImageZoom from 'react-image-zoom';

const images = [
  'https://media.istockphoto.com/id/1338067000/photo/fashion-studio-shot-of-a-blonde-model-woman-in-a-suit-isolated-at-the-brown-studio-background.jpg?s=2048x2048&w=is&k=20&c=tgIPC_P90oAOgPh1GLcHK-3AxS2Sa2wnRfdKV7yu81A=',
  'https://mediac.istockphoto.com/id/990534538/photo/beautiful-blonde-woman-posing-in-a-pink-coat-on-a-beige-background-fashion-show-clothing-woman.jpg?s=612x612&w=0&k=20&c=yNqX5CfwYWSkX-4P2LBjftMa5-s-jg0LwxZN5-0Kv8Y=',
  // Add additional image URLs as needed
];

const ProductGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image);
  };

  // const handleMouseMove = (e: React.MouseEvent) => {
  //   const rect = e.currentTarget.getBoundingClientRect();
  //   setMousePosition({
  //     x: e.clientX - rect.left,
  //     y: e.clientY - rect.top,
  //   });
  // };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const boundedX = Math.min(
      Math.max(x, 140), // Minimum x to keep within image box
      rect.width - 160, // Maximum x to keep within image box
    );
    const boundedY = Math.min(
      Math.max(y, 120), // Minimum y to keep within image box
      rect.height - 180, // Maximum y to keep within image box
    );

    setMousePosition({ x: boundedX, y: boundedY });
  };

  return (
    <div className="flex lg:flex-row flex-col gap-4">
      {/* Thumbnails - Left Sidebar */}
      <div className="flex lg:flex-col xsm:flex-row  gap-4">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleThumbnailClick(image)}
            className={`w-20 h-20 object-cover cursor-pointer border-2 ${
              selectedImage === image ? 'border-black' : 'border-transparent'
            }`}
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>

      {/* Full Image Display */}
      <div className="relative lg:w-4/5 flex justify-center items-center">
        <motion.img
          src={selectedImage}
          alt="Selected product"
          className="object-cover object-top w-full h-[600px]"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        <ReactImageZoom width={400} height={250} zoomWidth={500} img={selectedImage}/>
        {isHovered && (
          <motion.div
            className="absolute   border border-gray-200  shadow-lg pointer-events-none"
            style={{
              width: 300,
              height: 300,
              top: mousePosition.y - 120,
              left: mousePosition.x - 140,
              // backgroundImage: `url(${selectedImage})`,
              backgroundPosition: `${+mousePosition.x * 6 + 100}px ${-mousePosition.y * 3 + 75}px`,
              backgroundSize: '600%',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
        {isHovered && (
          <motion.div
            className="absolute   border border-gray-200 bg-white shadow-lg pointer-events-none"
            style={{
              width: 400,
              height: 400,
              top: 0,
              left: 560,
              backgroundImage: `url(${selectedImage})`,
              // backgroundPosition: `${-mousePosition.x * 4 + 100}px ${-mousePosition.y * 3 + 75}px`,
              // backgroundPosition: `${mousePosition.x * 6 + 100}px ${-mousePosition.y * 3 + 75}px`,
              backgroundPosition: `${-mousePosition.x * 7}px ${-mousePosition.y * 1}px`,
              backgroundSize: '600%',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </div>
    </div>
  );
};

const ProductDetails = () => {
  const AccordionFilter = ({ label, children }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="border-b w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left py-2 px-4  text-gray-700"
        >
          {label}
        </button>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="overflow-hidden"
        >
          <div className="py-2 px-4">{children}</div>
        </motion.div>
      </div>
    );
  };

  const Sidebar = () => (
    <div className="w-full hidden lg:block  bg-white ">
      {/* Availability */}
      <AccordionFilter label="Availability">
        <div>
          <label>
            <input type="checkbox" /> In Stock
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Out of Stock
          </label>
        </div>
      </AccordionFilter>

      {/* Price */}
      <AccordionFilter label="Price">
        <div>
          <input type="range" min="0" max="500" />
        </div>
      </AccordionFilter>

      {/* Colour Name */}
      <AccordionFilter label="Colour Name">
        <div>
          <label>
            <input type="checkbox" /> Red
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Blue
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Black
          </label>
        </div>
      </AccordionFilter>

      {/* Product Type */}
      <AccordionFilter label="Product Type">
        <div>
          <label>
            <input type="checkbox" /> T-Shirts
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Pants
          </label>
        </div>
      </AccordionFilter>

      {/* Gender */}
      <AccordionFilter label="Gender">
        <div>
          <label>
            <input type="checkbox" /> Men
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Women
          </label>
        </div>
      </AccordionFilter>

      {/* Size */}
      <AccordionFilter label="Size">
        <div>
          <label>
            <input type="checkbox" /> S
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> M
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> L
          </label>
        </div>
      </AccordionFilter>

      {/* Fit */}
      <AccordionFilter label="Fit">
        <div>
          <label>
            <input type="checkbox" /> Slim
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Regular
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Relaxed
          </label>
        </div>
      </AccordionFilter>
    </div>
  );

  return (
    <Layout>
      {/* Breadcrumb Section */}
      {/* <div className="text-sm text-gray-500 mb-4">
        Clothes and shoes {'>'} Shoes {'>'} Reebok
      </div> */}

      {/* Product Display */}
      <div className="grid py-4 lg:grid-cols-2 xsm:grid-cols-1  gap-11">
        {/* Left Column - Product Images */}
        <div className="space-y-4 w-full">
          {/* <motion.img
            className="w-full lg:h-[600px] xsm:h-[500px] object-cover object-top "
            src="https://media.istockphoto.com/id/990534538/photo/beautiful-blonde-woman-posing-in-a-pink-coat-on-a-beige-background-fashion-show-clothing-woman.jpg?s=612x612&w=0&k=20&c=yNqX5CfwYWSkX-4P2LBjftMa5-s-jg0LwxZN5-0Kv8Y="
            alt="Product"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <motion.img
                key={item}
                className="lg:h-[400px] w-full xsm:h-[200px] md:h-[360px]  object-cover object-top cursor-pointer"
                src={`https://media.istockphoto.com/id/990534538/photo/beautiful-blonde-woman-posing-in-a-pink-coat-on-a-beige-background-fashion-show-clothing-woman.jpg?s=612x612&w=0&k=20&c=yNqX5CfwYWSkX-4P2LBjftMa5-s-jg0LwxZN5-0Kv8Y=`}
                alt={`Thumbnail ${item}`}
                whileHover={{ scale: 1.0 }}
              />
            ))}
          </div> */}
          <ProductGallery />
          {/* Thumbnail Gallery */}
        </div>

        {/* Right Column - Product Information */}
        <div className="w-full ">
          <h1 className="text-3xl  font-bold">Shoes Reebok Zig Kinetica 3</h1>
          <div className="flex w-full justify-between align-center py-4">
            <div className="text-2xl font-bold text-gray-900">$199.00</div>
            <div className="text-yellow-400 py-1 text-1xl">
              ⭐⭐⭐⭐⭐ 42 reviews
            </div>
          </div>
          <div className="space-y-6">
            {/* Color Options */}
            <p className="text-sm   ">Shoes Zig Kinetica 3</p>
            <p className="text-sm   ">Shoes Zig Kinetica 3</p>
            <div className="space-y-6">
              <span className="font-bold">Color:</span> White
              <div className="flex space-x-4 mt-2">
                <div className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer"></div>
                <div className="w-10 h-10 rounded-full bg-gray-800 cursor-pointer"></div>
                <div className="w-10 h-10 rounded-full bg-gray-500 cursor-pointer"></div>
              </div>
            </div>

            {/* Size Options */}
            <div className="grid lg:grid-cols-2 xsm:grid-cols-1 gap-2">
              <div className="space-y-6">
                <span className="font-bold">Size:</span> EU Men
                <div className="grid lg:grid-cols-6 xsm:grid-cols-4 gap-2 mt-2">
                  {['40', '41', '42', '43', '44', '45', '46'].map((size) => (
                    <button
                      key={size}
                      className="border border-gray-300 px-4 py-2  hover:bg-gray-200"
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {/* {['XSM', 'SM', 'MD', 'L', 'XL', 'XLL'].map((size) => (
                  <button
                    key={size}
                    className="border border-gray-300 px-4 py-2  hover:bg-gray-200"
                  >
                    {size}
                  </button>
                ))} */}
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="">
            <div className="text-sm text-gray-500 py-6  ">
              Free delivery on orders over $30.00
            </div>
            <button className="w-full bg-black text-white py-3  hover:bg-gray-800">
              Add to Cart
            </button>
          </div>

          <div className="text-sm text-gray-500 py-6  ">
            Free returns within 28 days
            {/* Delivery Info */}
          </div>
          <div className="py-6">
            <Sidebar />

            {/* Delivery Info */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
