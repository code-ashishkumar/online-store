import { motion } from 'framer-motion';
import Layout from './Layout';
import { useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    title: 'How a visual artist redefines success in graphic design',
    date: 'April 09, 2022',
    category: 'Growth',
    image:
      'https://media.istockphoto.com/id/1338067000/photo/fashion-studio-shot-of-a-blonde-model-woman-in-a-suit-isolated-at-the-brown-studio-background.jpg?s=2048x2048&w=is&k=20&c=tgIPC_P90oAOgPh1GLcHK-3AxS2Sa2wnRfdKV7yu81A=',
  },
  {
    title: 'Why choose a theme that looks good with WooCommerce',
    date: 'April 09, 2022',
    category: 'Growth',
    image:
      'https://media.istockphoto.com/id/1338067000/photo/fashion-studio-shot-of-a-blonde-model-woman-in-a-suit-isolated-at-the-brown-studio-background.jpg?s=2048x2048&w=is&k=20&c=tgIPC_P90oAOgPh1GLcHK-3AxS2Sa2wnRfdKV7yu81A=',
  },
  {
    title: 'Lessons and insights from 8 years of Pixelgrade',
    date: 'April 09, 2022',
    category: 'Growth',
    image:
      'https://media.istockphoto.com/id/1338067000/photo/fashion-studio-shot-of-a-blonde-model-woman-in-a-suit-isolated-at-the-brown-studio-background.jpg?s=2048x2048&w=is&k=20&c=tgIPC_P90oAOgPh1GLcHK-3AxS2Sa2wnRfdKV7yu81A=',
  },
  {
    title: 'How to write content about your photographs',
    date: 'April 09, 2022',
    category: 'Growth',
    image:
      'https://media.istockphoto.com/id/1338067000/photo/fashion-studio-shot-of-a-blonde-model-woman-in-a-suit-isolated-at-the-brown-studio-background.jpg?s=2048x2048&w=is&k=20&c=tgIPC_P90oAOgPh1GLcHK-3AxS2Sa2wnRfdKV7yu81A=',
  },
  {
    title: 'How to write content about your photographs',
    date: 'April 09, 2022',
    category: 'Growth',
    image:
      'https://media.istockphoto.com/id/1338067000/photo/fashion-studio-shot-of-a-blonde-model-woman-in-a-suit-isolated-at-the-brown-studio-background.jpg?s=2048x2048&w=is&k=20&c=tgIPC_P90oAOgPh1GLcHK-3AxS2Sa2wnRfdKV7yu81A=',
  },
  // Add more blog posts as needed
];

const BlogSection = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl  text-gray-900 sm:text-4xl">
          Latest from our blog
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Create custom landing pages with Rareblocks that convert more visitors
          than any website.
        </p>
      </div>

      {/* Responsive grid for blog posts */}
      <div className="mt-12 grid gap-11 cursor-pointer sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-white  shadow-lg overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.1 }}
            onClick={() => navigate(`/blog-details/?${post.title.toLowerCase().replace(' ', '-')}`)}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full  object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-500">
                {post.category} • {post.date}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">
                {post.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
};

export default BlogSection;
