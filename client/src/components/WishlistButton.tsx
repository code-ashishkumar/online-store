import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useWishlistStore } from '../stores/useWishlistStore';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconRed } from '@heroicons/react/24/solid';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WishlistButton = ({ dark = false, product }: any) => {
  // const { id, name, price, color, images } = product;
  const { images } = product;

  const { wishlistItems, addItemToWishlist, removeItemFromWishlist } =
    useWishlistStore();
  const productId = 1; // Replace with dynamic ID if available

  const isWishlisted = wishlistItems.some((item) => item.id === productId);

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeItemFromWishlist(productId);
    } else {
      addItemToWishlist({
        id: productId,
        name: 'Shoes Reebok Zig Kinetica 3',
        price: 199.0,
        image: images[0],
        color: '',
      });
    }
  };

  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      className={classNames('p-4 rounded-full text-black cursor-pointer', {
        'bg-black': dark,
        'text-white': dark,
        'bg-gray-200': !dark,
        // 'xsm:w-full md:w-[400px]': !wFull,
        // 'w-full': wFull,
      })}
      onClick={handleWishlistToggle}
    >
      {isWishlisted ? (
        <HeartIconRed className="text-red-500 w-[22px] h-[22px]" />
      ) : (
        <HeartIcon className="text-gray-600 w-[22px] h-[22px]" />
      )}
    </motion.div>
  );
};

export default WishlistButton;
