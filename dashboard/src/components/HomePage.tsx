import { useState } from 'react';
import StatCard from './Card';
import { Sidebar } from './Dashboard';
import Graph from './Graph';
import TaskList from './TaskCard';
import TopBar from './TopBar';
import classNames from 'classnames';

function HomePage() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  return (
    <div className="flex bg-[#f3f6f8] min-h-screen">
      <Sidebar {...{ isSidebarCollapsed, setIsSidebarCollapsed }} />
      <TopBar {...{ isSidebarCollapsed, setIsSidebarCollapsed }} />
      <div
        className={classNames(
          'flex-grow  h-[calc(100vh-80px)] fixed right-0 bottom-0 overflow-auto scrollbar-thin p-4 translate ease-in-out  duration-300',
          {
            'w-[calc(100%-52px)] h-[calc(100vh-60px)] translate ease-in-out  duration-300':
              isSidebarCollapsed,
                'w-[calc(100%-252px)]':
            !isSidebarCollapsed,
          },
        )}
      >
        <div className="space-y-4">
          {/* Stats Cards */}
          <div className="flex flex-wrap shrink gap-4">
            <StatCard label="Active Employees" value="547" />
            <StatCard label="Number of Projects" value="339" />
            <StatCard label="Number of Tasks" value="147" />
            <StatCard label="Target Percentage" value="89.75%" />
          </div>
          {/* Main Sections */}
          <div className="flex flex-wrap shrink gap-4">
            <TaskList />
            <Graph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
