import React from 'react';
import Layout from './Layout';
import ProductCard from './ProductCard';

type Product = {
  id: number;
  title: string;
  price: string;
  image: string;
  sizes: string[];
};

export const products: Product[] = [
  {
    id: 1,
    title: 'Venture Backpack Cooler - Oasis',
    price: 'R 2,695.00',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    sizes: [], // No sizes for this product
  },
  {
    id: 2,
    title: 'Ladies Outdoor Adventure Tee - Pure Shores',
    price: 'R 650.00',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 3,
    title: 'Mens Outdoor Adventure Tee - Pure Shores',
    price: 'R 850.00',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 4,
    title: 'Ladies Regular Fit Tee - Blue Stripes',
    price: 'R 795.00',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    sizes: [],
  },
  {
    id: 5,
    title: 'Mens Standard Three Pack Cotton Tees - Olive / Stone / Blue',
    price: 'R 1,500.00',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 6,
    title: 'Mens Garment Dyed Long Sleeve Shirt - Light Sand',
    price: 'R 995.00',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    sizes: ['L', 'M', 'S', 'XL', 'XXL'],
  },
  {
    id: 7,
    title: 'New Summer Shirt',
    price: 'R 1,200.00',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    sizes: ['M', 'L', 'XL'],
  },
  // Add more products if needed
];

const ProductGrid = () => {
  return (
    <>
      <h2 className="text-center text-2xl font-bold mb-2">
        THE FOM SUMMER EXPERIENCE
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Cheers to a cold one with friends, evenings spent stargazing, and long
        days beside the pool - make this summer, a FOM summer.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {products.map((product) => (
          <ProductCard {...{ product }} />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
