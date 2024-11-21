import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from './Layout';

type BreadcrumbItem = {
  label: string;
  path: string;
};

const Breadcrumb: React.FC = () => {
  const location = useLocation();

  // Generate breadcrumb items from current location path
  const pathnames = location.pathname.split('/').filter(Boolean);

  const breadcrumbItems: BreadcrumbItem[] = pathnames
    .map((_, index) => {
      const path = `/${pathnames.slice(0, index + 1).join('/')}`;
      const label =
        pathnames[index].charAt(0).toUpperCase() + pathnames[index].slice(1);
      return { label, path };
    })
    .filter((item) => !item.label.includes('%20')); // Filter out items with spaces;

  return (
    // <Layout>
    <nav aria-label="breadcrumb">
      <ul className="flex items-center space-x-2   pt-6 pb-4 px-5 lg:pt-7 lg:px-12 text-gray-600">
        <motion.li
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/" className="hover:underline text-gray-600">
            Home
          </Link>
          {pathnames.length > 0 && (
            <span className="text-gray-400 ml-2">/</span>
          )}
        </motion.li>

        {breadcrumbItems.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
          >
            <Link
              to={item.path}
              className={
                index === breadcrumbItems.length - 1
                  ? 'font-light text-black'
                  : 'text-gray-600 hover:underline'
              }
            >
              {item.label}
            </Link>
            {index < breadcrumbItems.length - 1 && (
              <span className="text-gray-400">/</span>
            )}
          </motion.li>
        ))}
      </ul>
    </nav>
    // </Layout>
  );
};

export default Breadcrumb;
