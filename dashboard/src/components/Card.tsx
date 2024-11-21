// StatCard.tsx
import classNames from 'classnames';
import { motion } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-[#f8f9fa]/80 flex-1 shadow-gray-300 rounded-lg p-4 shadow-sm flex flex-start gap-4 align-start flex-col items-start justify-center"
  >
    <div className="text-gray-600 text-sm">{label}</div>
    <div className="flex items-center gap-2">
      {/* <div className="flex"> */}
      <div
        className={classNames(
          'rounded-full text-gray-400 p-2 px-4  bg-white shadow-sm shadow-gray-300  text-center',
          // {
          //   'p-1 px-3 translate ease-in-out  duration-300':
          //     isSidebarCollapsed,
          //   ' p-2 px-4  translate ease-in-out  duration-300':
          //     !isSidebarCollapsed,
          // },
        )}
      >
        <span className="">A</span>
      </div>

      <div className="text-2xl font-bold">{value}</div>
      {/* </div> */}
    </div>
  </motion.div>
);

export default StatCard;
