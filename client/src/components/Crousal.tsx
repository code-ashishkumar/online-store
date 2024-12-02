import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import useEmblaCarousel from 'embla-carousel-react';
import fashion1 from '../assets/media/fashion1.mp4';
import { useEffect, useRef } from 'react';

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Autoplay({ playOnInit: true, delay: 2000 }),
    Fade(),
  ]);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5; // Set playback speed (1.0 is normal speed)
    }
  }, []);

  const images = [
    {
      src: 'https://media.istockphoto.com/id/1338067000/photo/fashion-studio-shot-of-a-blonde-model-woman-in-a-suit-isolated-at-the-brown-studio-background.jpg?s=2048x2048&w=is&k=20&c=tgIPC_P90oAOgPh1GLcHK-3AxS2Sa2wnRfdKV7yu81A=',
      text: '',
    },
  ];

  return (
    <div className="embla max-w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <div className="embla__slide relative" key={index}>
              {/* <img
                className="embla__slide__img object-top     w-full h-[calc(100vh-90px)]"
                src={image.src}
                alt={`Slide ${index}`}
              /> */}
              <video
                ref={videoRef}
                className="embla__slide__img object-bottom w-full h-[calc(100vh-90px)]"
                autoPlay
                src={fashion1}
                loop
                controls={false}
                muted
                playsInline
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
