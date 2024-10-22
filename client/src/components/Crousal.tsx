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
      src: 'https://media.istockphoto.com/id/1338067000/photo/fashion-studio-shot-of-a-blonde-model-woman-in-a-suit-isolated-at-the-brown-studio-background.jpg?s=2048x2048&w=is&k=20&c=tgIPC_P90oAOgPh1GLcHK-3AxS2Sa2wnRfdKV7yu81A=',
      text: 'New Arrival Fasion Collection',
    },
  ];

  return (
    <div className="embla max-w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <div className="embla__slide relative" key={index}>
              <img
                className="embla__slide__img object-top     w-full h-[calc(100vh-90px)]"
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
