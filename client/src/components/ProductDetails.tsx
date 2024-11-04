import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import Layout from './Layout';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const images: any = [
  'https://media.istockphoto.com/id/1338067000/photo/fashion-studio-shot-of-a-blonde-model-woman-in-a-suit-isolated-at-the-brown-studio-background.jpg?s=2048x2048&w=is&k=20&c=tgIPC_P90oAOgPh1GLcHK-3AxS2Sa2wnRfdKV7yu81A=',
];

import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    user: 'Helen M.',
    date: 'Yesterday',
    rating: 5,
    text: 'Excellent running shoes. It turns very sharply on the foot.',
    replies: 42,
    likes: 0,
  },
  {
    user: 'Ann D.',
    date: '2 days ago',
    rating: 4,
    text: 'Good shoes',
    replies: 35,
    likes: 2,
  },
  {
    user: 'Andrew G.',
    date: '2 days ago',
    rating: 4,
    text: 'Is it suitable for running?',
    replies: 53,
    likes: 2,
  },
];

const ReviewSection = () => {
  const [sortOrder, setSortOrder] = useState('Newest');
  const [activeTab, setActiveTab] = useState('Reviews');

  return (
    <div className="w-full">
      <div className="flex border-b mb-6 overflow-x-auto">
        {['Details', 'Reviews', 'Discussion'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-semibold whitespace-nowrap ${
              activeTab === tab
                ? 'border-b-2 border-black text-black'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Details' && (
        <div className="p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-bold">Product Details</h2>
          <p className="text-gray-700 mt-4">
            Here are some details about the product. It has excellent features
            and quality that make it a great choice for customers.
          </p>
        </div>
      )}

      {activeTab === 'Reviews' && (
        <div className="md:flex md:space-x-4">
          <div className="w-full md:w-3/5 border-r md:border-r p-4 md:p-6">
            <div className="flex items-center justify-between pb-4 border-b">
              <h2 className="text-lg font-semibold">Reviews</h2>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border rounded px-2 py-1 text-gray-600"
              >
                <option>Newest</option>
                <option>Oldest</option>
                <option>Most Helpful</option>
              </select>
            </div>

            {reviews.map((review, index) => (
              <div key={index} className="py-4 border-b">
                <div className="flex items-center mb-1">
                  <div className="font-bold mr-2">{review.user}</div>
                  <span className="text-gray-500 text-sm">{review.date}</span>
                </div>
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="mt-2 text-sm text-gray-700">{review.text}</p>
                <div className="flex items-center mt-2 text-gray-500 text-sm space-x-4">
                  <span>Reply {review.replies}</span>
                  <span>👍 {review.likes}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full md:w-2/5 p-4 md:p-6 mt-4 md:mt-0">
            <div className="text-4xl font-bold mb-2 flex items-center space-x-2">
              <FaStar className="text-yellow-500" />
              <span>4.8</span>
            </div>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((star, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, j) => (
                      <FaStar
                        key={j}
                        className={`${j < star ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-3 ${
                        star === 5
                          ? 'bg-yellow-400 w-3/4'
                          : star === 4
                            ? 'bg-yellow-400 w-1/3'
                            : star === 3
                              ? 'bg-yellow-400 w-1/6'
                              : star === 2
                                ? 'bg-gray-300 w-1/12'
                                : 'bg-gray-300 w-1/12'
                      }`}
                    ></div>
                  </div>
                  <span className="text-gray-600">{[28, 9, 4, 1, 1][i]}</span>
                </div>
              ))}
            </div>

            <div className="bg-gray-100 mt-8 p-4 rounded-lg text-gray-800">
              <h3 className="font-bold text-sm mb-2">
                Popular brands with discounts
              </h3>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Discussion' && (
        <div className="p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-bold">Discussion</h2>
          <p className="text-gray-700 mt-4">
            Join the discussion about this product. Ask questions, give
            feedback, and interact with other customers here.
          </p>
        </div>
      )}
    </div>
  );
};

const ProductGallery = ({
  images,
  magnificationScale = 3,
}: ImageMagnifierProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  // Access addItem action from the Zustand store
  const addItem = useCartStore((state) => state.addItem);

  // Function to handle adding product to cart
  const handleAddToCart = () => {
    // Add product with quantity to cart
    addItem({
      id: 1,
      name: 'Product',
      price: 11,
      description: 'description',
      quantity: 1,
      image: '',
      color: '',
    });
  };

  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image);
  };

  const [isMagnifying, setIsMagnifying] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const [isDrag, setDrag] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useScroll(isDrag);

  const handleMouseEnter = () => setIsMagnifying(true);
  const handleMouseLeave = () => setIsMagnifying(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    if (x >= 0 && y >= 0 && x <= width && y <= height) {
      setMagnifierPosition({ x, y });
    } else {
      setIsMagnifying(false);
    }
  };

  const handleTouchStart = (e) => {
    setDrag(true);
    handleMouseEnter();
    handleTouchMove(e);
  };

  const handleTouchMove = (e) => {
    if (imageRef.current) {
      const touch = e.touches[0];
      const { left, top, width, height } =
        imageRef.current.getBoundingClientRect();
      const x = touch.clientX - left;
      const y = touch.clientY - top;

      const constrainedX = Math.max(0, Math.min(x, width));
      const constrainedY = Math.max(0, Math.min(y, height));

      setMagnifierPosition({ x: constrainedX, y: constrainedY });
    }
  };

  const handleTouchEnd = () => {
    setDrag(false);
    handleMouseLeave();
  };

  return (
    <div className="grid py-4 lg:grid-cols-2 xsm:grid-cols-1  gap-[100px]">
      <div className="space-y-4 w-full">
        <div className="flex relative   lg:flex-row flex-col gap-2">
          <div className=""></div>
          <div
            className="relative w-full  lg:h-[420px] xsm:h-[300px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              ref={imageRef}
              src={selectedImage}
              alt="Magnifiable"
              className=" w-full  h-full object-cover cursor-pointer"
            />

            <div className=" flex lg:flex-col xsm:flex-row  gap-4 py-2">
              {images.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleThumbnailClick(image)}
                  className={`w-20 h-20 object-cover cursor-pointer border-2 ${
                    selectedImage === image
                      ? 'border-black-400'
                      : 'border-transparent'
                  }`}
                  whileHover={{ scale: 1.05 }}
                />
              ))}
            </div>

            {isMagnifying && (
              <div
                className={classNames(
                  ' absolute xsm:left-0 top-0  bottom-0 w-full h-full  lg:left-[670px] lg:right-0  overflow-hidden ml-4 border border-gray-300 shadow-lg',

                  {
                    'w-[247px] ': isDrag,
                    'h-[300px]': isDrag,
                    'top-0': isDrag,
                    'right-0': isDrag,
                    'left-0': isDrag,
                  },
                )}
              >
                <img
                  src={selectedImage}
                  alt="Magnified"
                  className=" w-full  h-full object-cover cursor-pointer"
                  style={{
                    transform: `scale(${magnificationScale})`,
                    transformOrigin: `${(magnifierPosition.x / imageRef.current!.width) * 100}% ${(magnifierPosition.y / imageRef.current!.height) * 100}%`,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full ">
        <h1 className="text-3xl  font-bold">Shoes Reebok Zig Kinetica 3</h1>
        <div className="flex flex-col w-full justify-between align-center py-4">
          <div className="text-2xl font-bold text-gray-900">$199.00</div>
          <div className="text-yellow-400 py-1 text-1xl">
            ⭐⭐⭐⭐⭐ 42 reviews
          </div>
        </div>
        <div className="space-y-6">
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
        <div className="text-sm text-gray-500 py-6  ">
          Free delivery on orders over $30.00
        </div>
        <div className="flex gap-2">
          <button
            className="w-full bg-black text-white py-3  hover:bg-gray-800"
            onClick={handleAddToCart}
          >
            Buy Now
          </button>
          <WishlistButton {...{ product: { images: images } }} />

          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};

import classNames from 'classnames';
import useScroll from '../hooks/useScroll';
import ProductCrousel from './ProductCrousel';
import { useCartStore } from '../stores/cartStore';
import AddToCartButton from './AddToCartButton';
import WishlistButton from './WishlistButton';

interface ImageMagnifierProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  images?: any;
  magnifierSize?: number;
  magnificationScale?: number;
}

const ProductDetails = () => {
  return (
    <Layout>
      <ProductGallery {...{ images: images }} />
      <ReviewSection />
      <ProductCrousel />
    </Layout>
  );
};

export default ProductDetails;
