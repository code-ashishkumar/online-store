import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useEffect, useState } from 'react';
import NewArrivalCard from './NewArrivalCard';
import Button from './Button';
import useDynamicPath from '../hooks/useDynamicPath';
import { getLatestProducts } from '../services/api-services';

type PropType = {
  options?: EmblaOptionsType;
};

export const products = [
  {
    id: 1,
    title: 'Venture Backpack Cooler - Oasis',
    catagory: 'WALLETS',
    price: 'R 2,695.00',
    image:
      'https://cdn.pixabay.com/photo/2024/05/25/05/34/ai-generated-8786356_1280.jpg',
    subImage:
      'https://media.istockphoto.com/id/1321058053/photo/pretty-short-haired-brunette-woman-in-beige-business-smart-casual-suit-and-skeakers-standing.jpg?s=612x612&w=0&k=20&c=JAg-zsWKWoHAFgy1Ti9rsaZx4wvcVpLhUCncq-u5T8o=',
    sizes: [], // No sizes for this product
  },
  {
    id: 2,
    title: 'Ladies Outdoor Adventure Tee - Pure Shores',
    catagory: 'BELTS',
    price: 'R 650.00',
    image:
      'https://cdn.pixabay.com/photo/2024/05/13/04/47/ai-generated-8758048_1280.jpg',
    subImage:
      'https://media.istockphoto.com/id/1436367040/photo/vertical-confident-businesswoman-in-formal-stylish-outfit-with-jacket-on-shoulders.jpg?s=612x612&w=0&k=20&c=fenlqC0eIxwrLTctT_gtyPPr3DTY_ZVgH7lYR1bjJpk=',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 3,
    title: 'Mens Outdoor Adventure Tee - Pure Shores',
    catagory: 'PERFUME',
    price: 'R 850.00',
    image:
      'https://cdn.pixabay.com/photo/2023/09/16/16/00/woman-8257060_1280.jpg',
    subImage:
      'https://media.istockphoto.com/id/2147562047/photo/shooting-for-the-outerwear-catalog-red-haired-beauty-in-a-beige-full-length-coat-in-the.jpg?s=612x612&w=0&k=20&c=JODnMm0rVAFnWiJOAcug-WXevk6xC_5ZN5awFW7NPwo=',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 4,
    title: 'Ladies Regular Fit Tee - Blue Stripes',
    catagory: 'ACCESSERIES',
    price: 'R 795.00',
    image:
      'https://media.istockphoto.com/id/1186159219/photo/attractive-emotional-elegant-woman-posing-in-beige-coat-on-grey.jpg?s=612x612&w=0&k=20&c=jwTs0J300r4JnYXSbyiV3nf0f5MvnLxXSiasjxbFFdo=',
    subImage:
      'https://media.istockphoto.com/id/2177193469/photo/pretty-woman-in-light-clothes-on-isolated-background-touches-hair-on-her-head-with-her-hand.jpg?s=612x612&w=0&k=20&c=tEUhaCIYYTsHecw5D0y0CdvKrXsejvey8Pm1-n5dbLw=',
    sizes: [],
  },
  {
    id: 5,
    title: 'Ladies Regular Fit Tee - Blue Stripes',
    catagory: 'ACCESSERIES',
    price: 'R 795.00',
    image:
      'https://media.istockphoto.com/id/1055658428/photo/portrait-of-young-woman-in-autumn-coat.jpg?s=612x612&w=0&k=20&c=VW3xf2hflHS9huo32K7qgP1N3JJpo7ZxIuirTFdPrVs=',
    subImage:
      'https://media.istockphoto.com/id/1063057012/photo/photo-of-young-beautiful-woman.jpg?s=612x612&w=0&k=20&c=5PwoVSoXFmEUZEEiz5hWSC7MCiRHCvzuVVo1vMrUYzM=',
    sizes: [],
  },
  {
    id: 6,
    title: 'Ladies Regular Fit Tee - Blue Stripes',
    catagory: 'ACCESSERIES',
    price: 'R 795.00',
    image:
      'https://media.istockphoto.com/id/990534538/photo/beautiful-blonde-woman-posing-in-a-pink-coat-on-a-beige-background-fashion-show-clothing-woman.jpg?s=612x612&w=0&k=20&c=yNqX5CfwYWSkX-4P2LBjftMa5-s-jg0LwxZN5-0Kv8Y=',
    subImage:
      'https://media.istockphoto.com/id/2152702707/photo/hey-look-at-me-concept-a-spectacular-elegant-female-model-in-a-coat-poses-on-a-white.jpg?s=612x612&w=0&k=20&c=yfJmLvdk8HcmBoahUcpgYIwI-6zRFPOAgf6-z-yvPGM=',
    sizes: [],
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
const NewArrival: React.FC<PropType> = ({ header, description }: any) => {
  const OPTIONS: EmblaOptionsType = { align: 'start', dragFree: true };
  const [emblaRef] = useEmblaCarousel(OPTIONS);

  // const [path, setPath] = useState("/")
  const [latestProducts, setlatestProducts] = useState<any>([]);
 console.log("latestProducts", latestProducts)
  useEffect(() => {
    const fetchData = async () => {
      const productsData = await getLatestProducts();
      setlatestProducts([]);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-center text-2xl font-bold mb-2">New Arrival</h2>
      <p className="text-center text-gray-600 mb-8">
        The Urbanist Madrid features a true Scandinavian look.
      </p>
      {/* <h2 className="text-center text-2xl font-bold mb-2">{header}</h2>
      <p className="text-center text-gray-600 mb-8">
      {description}
      </p> */}
      <div className="overflow-hidden w-full " ref={emblaRef}>
        <div className="flex h-full xl:gap-[40px] lg:gap-12 md:gap-5 xsm:gap-10 touch-pan-y touch-pinch-zoom">
          {latestProducts?.map((product) => (
            <div
              className="
              xsm:flex-[0_0_65%]  
              sm:flex-[0_0_65%]   
              md:flex-[0_0_30%] 
              lg:flex-[0_0_21.2%]  
              xl:flex-[0_0_14.5%]
              " // 20% width on extra large screens
              key={product.id}
            >
              <NewArrivalCard product={product} />
              {/* <button className="bg-black text-white py-2 px-4  hover:bg-gray-800 w-full">
              Add to Cart
            </button> */}
            </div>
          ))}
        </div>
      </div>
      <div className={'w-full text-center'}>
        <Button {...{ title: 'SHOP ALL NEW ARRIVALS', dark: true }} />
      </div>
    </div>
  );
};

export default NewArrival;
