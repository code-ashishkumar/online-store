import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Fade from 'embla-carousel-fade';
import Autoplay from 'embla-carousel-autoplay';

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Autoplay({ playOnInit: true, delay: 2000 }),
    Fade(),
  ]);

  const images = [
    {
      src: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      text: 'New Arrival Fasion Collection',
    },
    {
      src: 'https://image.made-in-china.com/2f0j00zbKlfvVBrZRJ/Custom-T-Shirt-100-Cotton-310-Grams-Tshirt-Clothing-Shirts.webp',
      text: '',
    },
  ];

  return (
    <div className="embla max-w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <div className="embla__slide relative" key={index}>
              <img
                className="embla__slide__img w-full "
                src={image.src}
                alt={`Slide ${index}`}
              />
              {index === 0 && image.text && (
                <div className="absolute bottom-4 left-4 text-6xl text-wrap text-white py-2 px-4 max-w-xl">
                  {image.text}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
