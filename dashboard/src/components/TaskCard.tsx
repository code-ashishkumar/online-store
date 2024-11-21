// TaskList.tsx
import { motion } from 'framer-motion';

interface Task {
  id: number;
  logo: string;
  title: string;
  subtitle: string;
  status: string;
  progress: string;
  dueDate: string;
  avatars: string[];
}

const tasks: Task[] = [
  {
    id: 1,
    logo: '/path/to/logo1.png',
    title: 'Edifier',
    subtitle: 'Rebranding and Website Design',
    status: 'On Going',
    progress: '51%',
    dueDate: 'Aug 17, 2024',
    avatars: [
      '/path/to/avatar1.png',
      '/path/to/avatar2.png',
      '/path/to/avatar3.png',
    ],
  },
  {
    id: 2,
    logo: '/path/to/logo2.png',
    title: 'Edifier',
    subtitle: 'Web Design & Development',
    status: 'On Going',
    progress: '31%',
    dueDate: 'Aug 19, 2024',
    avatars: ['/path/to/avatar4.png', '/path/to/avatar5.png'],
  },
  {
    id: 3,
    logo: '/path/to/logo3.png',
    title: 'Ugreen',
    subtitle: 'Web App & Dashboard',
    status: 'On Going',
    progress: '89%',
    dueDate: 'Aug 15, 2024',
    avatars: ['/path/to/avatar6.png', '/path/to/avatar7.png'],
  },
];

const TaskList = () => {
  return (
    <div className="bg-[#f8f9fa]/80 flex-1 shadow-gray-300 rounded-lg p-4 shadow-sm">
      <h2 className="text-lg font-semibold">Ongoing Tasks</h2>
      <p className="text-sm text-gray-500 py-4">
        Best performing employee ranking.
      </p>

      {tasks.map((task) => (
        <motion.div
          key={task.id}
          whileHover={{ scale: 1.02 }}
          className="flex flex-col items-start gap-4 bg-white rounded-lg p-4 shadow-sm shadow-gray-200 mb-3"
        >
          {/* Logo and Title */}
          <div className="flex w-full  space-x-4">
            <div className=" rounded-full h-11 w-11 text-gray-400 p-3 bg-white shadow-sm shadow-gray-300   text-center">
              <span className="">A</span>
            </div>

            <div className="flex w-full flex-col">
              <div className="flex flex-row justify-between ">
                <div className="flex w-full flex-col">
                  <h4 className="font-medium">{task.title}</h4>
                  <p className="text-[11px] text-gray-500">{task.subtitle}</p>
                </div>
                <div className="flex px-4 -space-x-1 overflow-hidden">
                  <img
                    className=" size-6 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className=" size-6 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className=" size-6 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className=" size-6 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex w-full justify-between space-x-8 pt-4">
                <div>
                  <p className="text-sm text-gray-400">Status</p>
                  <p className="text-sm">{task.status}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Progress</p>
                  <p className="text-sm">{task.progress}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Due Date</p>
                  <p className="text-sm">{task.dueDate}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Task Details */}
        </motion.div>
      ))}
    </div>
  );
};

export default TaskList;

// // TaskList.tsx
// import { motion } from 'framer-motion';

// interface Task {
//   id: number;
//   logo: string;
//   title: string;
//   subtitle: string;
//   status: string;
//   progress: string;
//   dueDate: string;
//   avatars: string[];
// }

// const tasks: Task[] = [
//   {
//     id: 1,
//     logo: '/path/to/logo1.png',
//     title: 'Journey Scarves',
//     subtitle: 'Rebranding and Website Design',
//     status: 'On Going',
//     progress: '51%',
//     dueDate: 'Aug 17, 2024',
//     avatars: [
//       '/path/to/avatar1.png',
//       '/path/to/avatar2.png',
//       '/path/to/avatar3.png',
//     ],
//   },
//   {
//     id: 2,
//     logo: '/path/to/logo2.png',
//     title: 'Edifier',
//     subtitle: 'Web Design & Development',
//     status: 'On Going',
//     progress: '31%',
//     dueDate: 'Aug 19, 2024',
//     avatars: ['/path/to/avatar4.png', '/path/to/avatar5.png'],
//   },
//   {
//     id: 3,
//     logo: '/path/to/logo3.png',
//     title: 'Ugreen',
//     subtitle: 'Web App & Dashboard',
//     status: 'On Going',
//     progress: '89%',
//     dueDate: 'Aug 15, 2024',
//     avatars: ['/path/to/avatar6.png', '/path/to/avatar7.png'],
//   },
// ];

// const TaskList = () => {
//   return (
//     <div className="bg-white/80 rounded-lg p-6 shadow-md shadow-gray-300 space-y-4">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <div>
//           <h2 className="text-lg font-semibold">On Going Task</h2>
//           <p className="text-sm text-gray-500">
//             Best performing employee ranking.
//           </p>
//         </div>
//         <div className="flex space-x-4">
//           <button className="p-2 rounded-full bg-gray-100">
//             <img src="/path/to/search-icon.svg" alt="Search" />
//           </button>
//           <button className="p-2 rounded-full bg-gray-100">
//             <img src="/path/to/filter-icon.svg" alt="Filter" />
//           </button>
//         </div>
//       </div>

//       {/* Task Cards */}
//       {tasks.map((task) => (
//         <motion.div
//           key={task.id}
//           whileHover={{ scale: 1.02 }}
//           className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm shadow-gray-200 mb-3"
//         >
//           {/* Logo and Title */}
//           <div className="flex items-center space-x-4">
//             <img
//               src={task.logo}
//               alt={task.title}
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <div>
//               <h3 className="font-medium">{task.title}</h3>
//               <p className="text-sm text-gray-500">{task.subtitle}</p>
//             </div>
//           </div>

//           {/* Task Details */}
//           <div className="flex space-x-8">
//             <div>
//               <p className="text-sm text-gray-400">Status</p>
//               <p className="font-medium">{task.status}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-400">Progress</p>
//               <p className="font-medium">{task.progress}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-400">Due Date</p>
//               <p className="font-medium">{task.dueDate}</p>
//             </div>
//           </div>

//           {/* Avatars */}
//           <div className="flex -space-x-2">
//             {task.avatars.map((avatar, idx) => (
//               <img
//                 key={idx}
//                 src={avatar}
//                 alt={`Avatar ${idx + 1}`}
//                 className="w-8 h-8 rounded-full border-2 border-white"
//               />
//             ))}
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default TaskList;
