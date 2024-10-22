import Button from './Button';

type Product = {
  id: number;
  title: string;
  catagory: string;
  price: string;
  image: string;
  sizes: string[];
};

export const products: Product[] = [
  {
    id: 1,
    title: 'Venture Backpack Cooler - Oasis',
    catagory: 'WALLETS',
    price: 'R 2,695.00',
    image:
      'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    sizes: [], // No sizes for this product
  },
  {
    id: 2,
    title: 'Ladies Outdoor Adventure Tee - Pure Shores',
    catagory: 'BELTS',
    price: 'R 650.00',
    image:
      'https://media.istockphoto.com/id/618641686/photo/isolated-colorful-weave-leather-belt-on-white-background.jpg?s=612x612&w=0&k=20&c=e2kv9X8tDT8ucSGKPwSrCRoK0VPWuVIDd9G4sjCXb0g=',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 3,
    title: 'Mens Outdoor Adventure Tee - Pure Shores',
    catagory: 'PERFUME',
    price: 'R 850.00',
    image:
      'https://media.istockphoto.com/id/118367428/photo/fragrance-bottle.jpg?s=612x612&w=0&k=20&c=2nvWcPJS-CSsek8HLyKRc77jwuQNwxOT2LyC1LKal5E=',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 4,
    title: 'Ladies Regular Fit Tee - Blue Stripes',
    catagory: 'ACCESSERIES',
    price: 'R 795.00',
    image:
      'https://media.istockphoto.com/id/1282961197/photo/accessories-for-men.jpg?s=612x612&w=0&k=20&c=Bex18ha0NQoav2f_7pbytjBaPk91l_99EoGPDYnjga8=',
    sizes: [],
  },
];

const ProductGrid = () => {
  return (
    <>
      {/* <div>
        <h2 className="text-center text-2xl font-bold mb-2">NEW ARRIVAL</h2>
        <p className="text-center text-gray-600 mb-8">
          Cheers to a cold one with friends, evenings spent stargazing, and long
          days beside the pool - make this summer
        </p>
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden cursor-pointer  h-[400px]    transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full 
              relative
               h-[400px]
         object-cover  mb-4 max-w-none"
              // className="w-full h-fit object-cover  mb-4 max-w-none"
              // onMouseEnter={() => setIsHovered(true)}
              // onMouseLeave={() => setIsHovered(false)}
            ></img>
            <div className="min-h-28">
              {/* <h3 className="text-sm  mb-2">{product.title}</h3>
              <p className="text-sm text-gray-700 mb-4">{product.price}</p> */}
            </div>
            <div className="absolute inset-0 flex flex-col justify-end items-center text-center py-6">
              {/* <h1 className="text-4xl text=w pb-4">{product.catagory}</h1> */}
              <button className="border border-white bg-white text-black  transition duration-100 hover:delay-20 py-2 px-6">
                {product.catagory}
              </button>
              {/* <Button {...{ title: product.catagory, dark: true }} /> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
