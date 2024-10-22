import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from './Button';

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
  
function ProductInfo() {
  const [isSortingOpen, setIsSortingOpen] = useState(false);

  const handleSortClick = () => {
    setIsSortingOpen(!isSortingOpen);
  };
  // Filter Component
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const AccordionFilter = ({ label, children }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="border-b w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left py-2 px-4  text-gray-700"
        >
          {label}
        </button>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="overflow-hidden"
        >
          <div className="py-2 px-4">{children}</div>
        </motion.div>
      </div>
    );
  };

  const Sidebar = () => (
    <div className="w-full hidden lg:block  bg-white ">
      {/* Availability */}
      <AccordionFilter label="Availability">
        <div>
          <label>
            <input type="checkbox" /> In Stock
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Out of Stock
          </label>
        </div>
      </AccordionFilter>

      {/* Price */}
      <AccordionFilter label="Price">
        <div>
          <input type="range" min="0" max="500" />
        </div>
      </AccordionFilter>

      {/* Colour Name */}
      <AccordionFilter label="Colour Name">
        <div>
          <label>
            <input type="checkbox" /> Red
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Blue
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Black
          </label>
        </div>
      </AccordionFilter>

      {/* Product Type */}
      <AccordionFilter label="Product Type">
        <div>
          <label>
            <input type="checkbox" /> T-Shirts
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Pants
          </label>
        </div>
      </AccordionFilter>

      {/* Gender */}
      <AccordionFilter label="Gender">
        <div>
          <label>
            <input type="checkbox" /> Men
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Women
          </label>
        </div>
      </AccordionFilter>

      {/* Size */}
      <AccordionFilter label="Size">
        <div>
          <label>
            <input type="checkbox" /> S
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> M
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> L
          </label>
        </div>
      </AccordionFilter>

      {/* Fit */}
      <AccordionFilter label="Fit">
        <div>
          <label>
            <input type="checkbox" /> Slim
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Regular
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Relaxed
          </label>
        </div>
      </AccordionFilter>
    </div>
  );

  const ProductList = () => (
    <div className="grid  col-span-3 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product) => {
        // <ProductCard {...{ product, showAddToCart: true }} />
        return (
          //   <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="group  relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-70">
              <img
                src={product.image}
                alt="Front of men&#039;s Basic Tee in black."
                className="h-[340px] w-full object-cover object-center  lg:w-full"
              />
            </div>
            <div className="mt-4 pb-6 p-2 flex justify-between">
              <div>
                <h3 className="text-sm  mb-2">{product.title}</h3>
                {/* <h3 className="text-sm  mb-2">{product.title}</h3> */}
                <p className="text-sm text-gray-700 mb-4">{product.price}</p>
                {/* <p className="mt-1 text-sm text-gray-500"> {product.color}</p> */}
              </div>
              {/* <p className="\ text-sm font-medium text-gray-900">
                {' '}
                {product.price}
              </p> */}
            </div>
            <Button {...{ title: 'Add to Cart', dark: true }} />
          </div>
          //   </div>
        );
      })}
    </div>
  );

  return (
    <div>
      <div className="w-full  px-6 gap-4 flex justify-end">
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="inline-flex bg-slate-100 w-full justify-center gap-x-1.5   px-3 py-2 text-sm  text-gray-900  hover:bg-gray-50"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={handleSortClick}
            >
              Sort
              <svg
                className="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          {isSortingOpen ? (
            <div
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex={-1}
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-0"
                >
                  Account settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                >
                  Support
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-2"
                >
                  License
                </a>
                <form method="POST" action="#" role="none">
                  <button
                    type="submit"
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-3"
                  >
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="w-full  p-4 lg:grid lg:grid-cols-4 gap-4">
        <Sidebar />
        <ProductList />
      </div>
    </div>
  );
}

export default ProductInfo;
