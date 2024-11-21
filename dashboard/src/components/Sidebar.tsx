// Sidebar.tsx
import { motion } from 'framer-motion';

const Sidebar = () => {
  return (
    <div className="w-60 bg-[#f3f6f7] h-screen p-4 ">
      <div className="text-xl font-bold mb-6">InsightHub</div>
      <nav className="px-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-2 text-white bg-blue-500 rounded-lg mb-2 flex items-center space-x-2"
        >
          <div className=" rounded-lg text-gray-400 bg-[#f3f6f7] shadow-sm shadow-gray-300   text-center">
          <span>📊</span>
          </div>
        
          <span>Dashboard</span>
        </motion.div>
        <div className="mt-6">
          <p className="text-gray-600">Projects</p>
          <ul className="mt-2 space-y-1">
            <li className="text-sm text-gray-500 pl-4">Active Project</li>
            <li className="text-sm text-gray-500 pl-4">Project Done</li>
            <li className="text-sm text-gray-500 pl-4">Project on Hold</li>
          </ul>
        </div>
        {/* Other sections here */}
      </nav>
    </div>
  );
};

export default Sidebar;
