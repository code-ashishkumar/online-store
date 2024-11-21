import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function AutoPlayMethods() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    fade: true,
  };
  return (
    <div className="slider-container relative">
      <Slider {...settings}>
        <div className="overflow-hidden">
          <img
            alt=""
            src="https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2/"
            className="w-full object-cover object-center promo-images"
          />
        </div>
        <div className="overflow-hidden">
          <img
            alt=""
            src="https://image.made-in-china.com/2f0j00zbKlfvVBrZRJ/Custom-T-Shirt-100-Cotton-310-Grams-Tshirt-Clothing-Shirts.webp"
            className="w-full object-cover object-center promo-images"
          />
        </div>
      </Slider>
      <div className="text-white">
        <h1 className="absolute left-10 bottom-40 text-6xl pb-2 text-wrap">
          Newly Launched
        </h1>
        <button className="absolute left-10 bottom-20 border border-black text-black hover:bg-black hover:text-white transition duration-300  hover:delay-150 py-2 px-6">
          Shop Now
        </button>
      </div>
    </div>
  );
}
export default AutoPlayMethods;
