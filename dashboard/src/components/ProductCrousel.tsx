import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';
import ProductCard from './ProductCard';

type PropType = {
  options?: EmblaOptionsType;
};

// eslint-disable-next-line react-refresh/only-export-components
export const products = [
  {
    id: 1,
    title: 'Venture Backpack Cooler - Oasis',
    catagory: 'WALLETS',
    price: 'R 2,695.00',
    image:
      'https://media.istockphoto.com/id/802386776/photo/handsome-young-caucasian-man-smiling-and-posing-with-hands-in-pockets.jpg?s=612x612&w=0&k=20&c=ArSnp7e50kJ1GXDv2v7G5ChcclKIBsbOMcgr57BR0-0=',
      subImage:   'https://media.istockphoto.com/id/1129817026/photo/irresistible-man-full-length-of-charming-and-young-man-keeping-hands-in-his-pockets-while.jpg?s=612x612&w=0&k=20&c=pY2HxWg5SGJF1KoJUCHy7P3ASR1hWJ5FjNDktj7GpFk=',
    sizes: [], // No sizes for this product
  },
  {
    id: 2,
    title: 'Ladies Outdoor Adventure Tee - Pure Shores',
    catagory: 'BELTS',
    price: 'R 650.00',
    image:
      'https://cdn.pixabay.com/photo/2024/05/13/04/47/ai-generated-8758048_1280.jpg',
      subImage:   'https://media.istockphoto.com/id/1436367040/photo/vertical-confident-businesswoman-in-formal-stylish-outfit-with-jacket-on-shoulders.jpg?s=612x612&w=0&k=20&c=fenlqC0eIxwrLTctT_gtyPPr3DTY_ZVgH7lYR1bjJpk=',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 3,
    title: 'Mens Outdoor Adventure Tee - Pure Shores',
    catagory: 'PERFUME',
    price: 'R 850.00',
    image:
      'https://cdn.pixabay.com/photo/2023/09/16/16/00/woman-8257060_1280.jpg',
      subImage:    'https://media.istockphoto.com/id/2147562047/photo/shooting-for-the-outerwear-catalog-red-haired-beauty-in-a-beige-full-length-coat-in-the.jpg?s=612x612&w=0&k=20&c=JODnMm0rVAFnWiJOAcug-WXevk6xC_5ZN5awFW7NPwo=',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 4,
    title: 'Ladies Regular Fit Tee - Blue Stripes',
    catagory: 'ACCESSERIES',
    price: 'R 795.00',
    image:
      'https://media.istockphoto.com/id/1186159219/photo/attractive-emotional-elegant-woman-posing-in-beige-coat-on-grey.jpg?s=612x612&w=0&k=20&c=jwTs0J300r4JnYXSbyiV3nf0f5MvnLxXSiasjxbFFdo=',
      subImage:     'https://media.istockphoto.com/id/2177193469/photo/pretty-woman-in-light-clothes-on-isolated-background-touches-hair-on-her-head-with-her-hand.jpg?s=612x612&w=0&k=20&c=tEUhaCIYYTsHecw5D0y0CdvKrXsejvey8Pm1-n5dbLw=',
    sizes: [],
  },
  {
    id: 5,
    title: 'Ladies Regular Fit Tee - Blue Stripes',
    catagory: 'ACCESSERIES',
    price: 'R 795.00',
    image:
      'https://media.istockphoto.com/id/1055658428/photo/portrait-of-young-woman-in-autumn-coat.jpg?s=612x612&w=0&k=20&c=VW3xf2hflHS9huo32K7qgP1N3JJpo7ZxIuirTFdPrVs=',
      subImage:      'https://media.istockphoto.com/id/1063057012/photo/photo-of-young-beautiful-woman.jpg?s=612x612&w=0&k=20&c=5PwoVSoXFmEUZEEiz5hWSC7MCiRHCvzuVVo1vMrUYzM=',
    sizes: [],
  },
  {
    id: 6,
    title: 'Ladies Regular Fit Tee - Blue Stripes',
    catagory: 'ACCESSERIES',
    price: 'R 795.00',
    image:
    'https://media.istockphoto.com/id/990534538/photo/beautiful-blonde-woman-posing-in-a-pink-coat-on-a-beige-background-fashion-show-clothing-woman.jpg?s=612x612&w=0&k=20&c=yNqX5CfwYWSkX-4P2LBjftMa5-s-jg0LwxZN5-0Kv8Y=',
      subImage:      'https://media.istockphoto.com/id/2152702707/photo/hey-look-at-me-concept-a-spectacular-elegant-female-model-in-a-coat-poses-on-a-white.jpg?s=612x612&w=0&k=20&c=yfJmLvdk8HcmBoahUcpgYIwI-6zRFPOAgf6-z-yvPGM=',
    sizes: [],
  },
];



// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductCrousel: React.FC<PropType> = ({header, description}: any) => {
  const OPTIONS: EmblaOptionsType = { align: 'start', dragFree: true };
  const [emblaRef] = useEmblaCarousel(OPTIONS);

  return (
    <div className='w-full'>
      <h2 className="text-center text-2xl font-bold mb-2">WINTER EXCLUSIVE</h2>
      <p className="text-center text-gray-600 mb-8">
        Discover our limited-time winter collection, featuring chic outerwear
        and cozy knits. Stay warm and fashionable—shop now!
      </p>
      <h2 className="text-center text-2xl font-bold mb-2">{header}</h2>
      <p className="text-center text-gray-600 mb-8">
      {description}
      </p>
      <div className="overflow-hidden w-full " ref={emblaRef}>
        <div className="flex h-full xl:gap-[50px] lg:gap-12 md:gap-5 xsm:gap-10 touch-pan-y touch-pinch-zoom">
          {products.map((product) => (
            <div
              className="
              xsm:flex-[0_0_65%]   // 60% width on extra small screens
              sm:flex-[0_0_65%]    // 50% width on small screens
              md:flex-[0_0_30%] // 33.33% width on medium screens
              lg:flex-[0_0_21.2%]    // 25% width on large screens
              xl:flex-[0_0_13.5%]
              " // 20% width on extra large screens
              key={product.id}
            >
              <ProductCard product={product} />
              {/* <button className="bg-black text-white py-2 px-4  hover:bg-gray-800 w-full">
              Add to Cart
            </button> */}
            </div>
          ))}
        </div>
      </div>
<div     className={'w-full text-center'}>


      <button
        className={'bg-black  xsm:w-[300px] lg:w-[400px]   mx-auto text-white py-2 px-4 hover:bg-gray-800'}
      >
        Shop Winter
      </button></div>
    </div>
  );
};

export default ProductCrousel;
