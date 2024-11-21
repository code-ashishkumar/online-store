import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-6 ">
      <div className="py-6 px-5  lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase">Subscribe</h4>

          <p className="text-gray-600">
            Receive exclusive updates, promotions, news and more!
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form className="space-y-4">
              <input
                type="email"
                placeholder="E-mail"
                className="w-[70%] p-3 bg-gray-200  focus:outline-none"
              />
              <button
                type="submit"
                className="w-[40%] bg-black text-white px-4 py-2  hover:bg-gray-900 transition"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Middle Column */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold uppercase">Information</h4>
          <ul className="text-gray-600 space-y-1">
            {[
              'About us',
              'Store Locator',
              'Search',
              'Personalisation',
              'FAQ',
              'Shipping & Delivery',
              'Returns & Exchanges',
              'Warranty',
              'Careers',
              'Leather Care',
              'Privacy Policy',
              'Terms of Service',
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 * index }}
                className="hover:text-gray-800 cursor-pointer"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-sm font-semibold uppercase">Contact Us</h4>
          <ul className="text-gray-600 space-y-2">
            <li>
              <strong>Email:</strong> support@onlinestore.co.za
            </li>
            <li>
              <strong>WhatsApp:</strong> 111 111 1111
            </li>
            <li>
              <strong>Customer Service hours:</strong> Monday to Friday 08:00 -
              17:00
            </li>
            <li>
              <strong>Address:</strong> Online Store , Cape Town, 1111
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Logo or Footer Note */}
      <div className="mt-8 text-center text-gray-600">
        <img
          src="logo.png" // Replace with your logo
          alt="Online Store"
          className="mx-auto h-8 mb-4"
        />
        <p>© 2024 Online Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
