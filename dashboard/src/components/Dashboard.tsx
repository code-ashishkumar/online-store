import {
  BellAlertIcon,
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClipboardDocumentCheckIcon,
  Cog6ToothIcon,
  EnvelopeIcon,
  FolderOpenIcon,
  HomeIcon,
  MapIcon,
  PencilIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { motion, MotionConfig } from 'framer-motion';
import { useState } from 'react';
import '../style.css';

export function Sidebar({ isSidebarCollapsed, setIsSidebarCollapsed }) {
  // const [isSidebarCollapsed, setIsCollapsed] = useState(false);

  const SIDEBAR_ITEMS = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: (
        <HomeIcon
          className={classNames(
            'size=6 text-black w-5 h-5 translate ease-in-out  duration-300',
            {
              ' translate ease-in-out  duration-300': isSidebarCollapsed,
            },
          )}
        />
      ),
    },
    {
      id: 'mail',
      title: 'Mail',
      icon: (
        <EnvelopeIcon
          className={classNames(
            'size=6 text-black w-5 h-5 translate  duration-300',
            {
              ' translate ease-in-out  duration-300': isSidebarCollapsed,
            },
          )}
        />
      ),
    },
    {
      id: 'projects',
      title: 'Projects',
      icon: (
        <FolderOpenIcon
          className={classNames(
            'size=6 text-black w-5 h-5 translate  duration-300',
            {
              ' translate ease-in-out  duration-300': isSidebarCollapsed,
            },
          )}
        />
      ),
    },
    {
      id: 'reports',
      title: 'Reports',
      icon: (
        <PencilIcon
          className={classNames(
            'size=6 text-black w-5 h-5 translate  duration-300',
            {
              ' translate ease-in-out  duration-300': isSidebarCollapsed,
            },
          )}
        />
      ),
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: (
        <BellAlertIcon
          className={classNames(
            'size=6 text-black w-5 h-5 translate  duration-300',
            {
              ' translate ease-in-out  duration-300': isSidebarCollapsed,
            },
          )}
        />
      ),
    },
    {
      id: 'Todo',
      title: 'Todo',
      icon: (
        <ClipboardDocumentCheckIcon
          className={classNames(
            'size=6 text-black w-5 h-5 translate  duration-300',
            {
              ' translate ease-in-out  duration-300': isSidebarCollapsed,
            },
          )}
        />
      ),
    },
    {
      id: 'Clander',
      title: 'Clander',
      icon: (
        <CalendarIcon
          className={classNames(
            'size=6 text-black w-5 h-5 translate  duration-300',
            {
              ' translate ease-in-out  duration-300': isSidebarCollapsed,
            },
          )}
        />
      ),
    },
    {
      id: 'Map',
      title: 'Map',
      icon: (
        <MapIcon
          className={classNames(
            'size=6 text-black w-5 h-5 translate  duration-300',
            {
              ' translate ease-in-out  duration-300': isSidebarCollapsed,
            },
          )}
        />
      ),
    },
    {
      id: 'Items',
      title: 'Items',
      icon: (
        <Squares2X2Icon
          className={classNames(
            'size=6 text-black w-5 h-5 translate  duration-300',
            {
              ' translate ease-in-out  duration-300': isSidebarCollapsed,
            },
          )}
        />
      ),
    },
    {
      id: 'Bag',
      title: 'Bag',
      icon: (
        <ShoppingBagIcon
          className={classNames(
            'size=6 text-black w-5 h-5 translate  duration-300',
            {
              ' translate ease-in-out  duration-300': isSidebarCollapsed,
            },
          )}
        />
      ),
    },
    {
      id: 'Cart',
      title: 'Cart',
      icon: (
        <ShoppingCartIcon
          className={classNames(
            'size=6 text-black w-5 h-5 translate  duration-300',
            {
              ' translate ease-in-out  duration-300': isSidebarCollapsed,
            },
          )}
        />
      ),
    }, {
      id: 'Settings',
      title: 'Settings',
      icon: (
        <Cog6ToothIcon
          className={classNames(
            'size=6 text-black w-5 h-5 translate  duration-300',
            {
              ' translate ease-in-out  duration-300': isSidebarCollapsed,
            },
          )}
        />
      ),
    },

  ];
  const [activeTab, setActiveTab] = useState(SIDEBAR_ITEMS[0].id);

  return (
    <MotionConfig transition={{ type: 'spring', bounce: 0, duration: 0.4 }}>
      <div className="app">
        <motion.div
          className="sidebar h-screen p-2 bg-[#f3f6f8]"
          animate={{ width: isSidebarCollapsed ? 52 : 252 }}
          layout
        >
          <div
            className={classNames('flex    hover:bg-[#e2e8f0] rounded-md', {
              'translate ease-in-out  duration-300': isSidebarCollapsed,
              'p-2 translate ease-in-out gap-2 duration-300': !isSidebarCollapsed,
            })}
          >
            {/* <div className="flex"> */}
            <div
              className={classNames(
                'rounded-md text-white p-[10px] bg-black shadow-sm shadow-gray-300 translate ease-in-out  duration-300  text-center',
                {
                  'p-2 translate ease-in-out  duration-300': isSidebarCollapsed,
                },
              )}
            >
              <div className="text-sm m-0 w-4 h-4">A</div>
            </div>
            <div className="flex flex-col">
              <motion.span
                className="sidebar-item__title text-md text-sm translate ease-in-out  duration-300 overflow-hidden"
                animate={{
                  clipPath: isSidebarCollapsed
                    ? 'inset(0% 100% 0% 0%)'
                    : 'inset(0% 0% 0% 0%)',
                  opacity: isSidebarCollapsed ? 0 : 1,
                }}
              >
                Company
              </motion.span>
              <motion.span
                className="text-[11px] text-gray-600  translate ease-in-out  duration-300 overflow-hidden"
                animate={{
                  clipPath: isSidebarCollapsed
                    ? 'inset(0% 100% 0% 0%)'
                    : 'inset(0% 0% 0% 0%)',
                  opacity: isSidebarCollapsed ? 0 : 1,
                }}
              >
                IT
              </motion.span>
            </div>

            <div className="text-xl font-bold"> </div>
            {/* </div> */}
          </div>
          <button
            className="absolute right-[-16px] top-[16px] w-[22px] h-[22px] flex items-center justify-center rounded-[16px] bg-[#f5f5f5] border  cursor-pointer z-10"
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          >
            {isSidebarCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </button>
          <div className="py-2 flex flex-col flex-wrap align-center">
            {SIDEBAR_ITEMS.map((item) => (
              <SidebarItem
                isSidebarCollapsed={isSidebarCollapsed}
                key={item.id}
                item={item}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            ))}
          </div>
          <div
            className={classNames(
              'flex items-center fixed bottom-0 rounded-md',
              {
                'py-2 translate ease-in-out  duration-300': isSidebarCollapsed,
                'py-2 px-2  hover:bg-[#e2e8f0] gap-2 translate ease-in-out  duration-300':
                  !isSidebarCollapsed,
              },
            )}
          >
            {/* <div className="flex"> */}
            <div
              className={classNames(
                'rounded-md  text-white p-[10px]  bg-black shadow-sm shadow-gray-300 translate ease-in-out  duration-300  text-center',
                {
                  'p-2 translate ease-in-out  duration-300': isSidebarCollapsed,
                },
              )}
            >
              <div className="text-sm m-0 w-4 h-4">A</div>
            </div>
            <motion.span
              className={classNames('sidebar-item__title  text-md', {
                'w-[52px] translate ease-in-out  duration-300': isSidebarCollapsed,
                'w-[176px] ': !isSidebarCollapsed,
              })}
              animate={{
                clipPath: isSidebarCollapsed
                  ? 'inset(0% 100% 0% 0%)'
                  : 'inset(0% 0% 0% 0%)',
                opacity: isSidebarCollapsed ? 0 : 1,
              }}
            >
              Ashish
            </motion.span>
            <div className="text-xl font-bold"> </div>
            {/* </div> */}
          </div>
        </motion.div>
      </div>
    </MotionConfig>
  );
}

function SidebarItem({ item, activeTab, setActiveTab, isSidebarCollapsed }) {
  const IconComponent = item.icon;

  console.log(IconComponent);
  return (
    <motion.div
      layout
      className={classNames('sidebar-item ', {
        'sidebar-item__active': activeTab === item.id,
        '': isSidebarCollapsed,
      })}
      onFocus={() => setActiveTab(item.id)}
      onMouseOver={() => setActiveTab(item.id)}
      onMouseLeave={() => setActiveTab(item.id)}
    >
      {activeTab === item.id ? (
        <motion.div
          layoutId="sidebar-item-indicator"
          className={classNames('p-2 sidebar-item__active-bg bg-[#e2e8f0]', {
            'w-[36px]': isSidebarCollapsed,
            '': !isSidebarCollapsed,
          })}
          // animate={{
          //   clipPath: isSidebarCollapsed
          //     ? 'inset(0% 100% 0% 0%)'
          //     : 'inset(0% 0% 0% 0%)',
          //   // opacity: isSidebarCollapsed ? 0 : 1,
          // }}
        />
      ) : null}
      <div className="relative  flex  items-center text-center">
        <div
          className={classNames('p-2', {
            '': isSidebarCollapsed,
            'translate ease-in-out gap-1 duration-300': !isSidebarCollapsed,
          })}
        >
          {IconComponent}
        </div>
        <motion.span
          className="sidebar-item__title text-md"
          animate={{
            clipPath: isSidebarCollapsed
              ? 'inset(0% 100% 0% 0%)'
              : 'inset(0% 0% 0% 0%)',
            opacity: isSidebarCollapsed ? 0 : 1,
          }}
        >
          {item.title}
        </motion.span>
      </div>
    </motion.div>
  );
}
