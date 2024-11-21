import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { products } from './Product';
import ProductCard from './ProductCard';

type PropType = {
  options?: EmblaOptionsType;
};

const ProductCrousel: React.FC<PropType> = () => {
  const OPTIONS: EmblaOptionsType = { align: 'start', dragFree: true };
  const [emblaRef] = useEmblaCarousel(OPTIONS);

  return (
    <div className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex  touch-pan-y touch-pinch-zoom">
        {products.map((product) => (
          <div
            className="
              flex-none pl-8
              xsm:flex-[0_0_60%]   // 60% width on extra small screens
              sm:flex-[0_0_50%]    // 50% width on small screens
              md:flex-[0_0_33.33%] // 33.33% width on medium screens
              lg:flex-[0_0_2%]    // 25% width on large screens
              xl:flex-[0_0_2%]"   // 20% width on extra large screens
            key={product.id}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCrousel;
