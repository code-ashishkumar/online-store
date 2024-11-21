import classNames from 'classnames';

// TopBar.tsx
const TopBar = ({ isSidebarCollapsed }) => {
  return (
    <div
      className={classNames(
        ' right-0 top-0 h-[60px] shrink fixed  translate ease-in-out  duration-300',
        {
          'w-[calc(100%-52px)] h-[40px]  translate ease-in-out  duration-300':
            isSidebarCollapsed,
            'w-[calc(100%-252px)]':
            !isSidebarCollapsed,
        },
      )}
    >
      <div
        className={classNames(
          'flex px-4  justify-between items-center ',
          {
            'py-2  translate ease-in-out  duration-300': isSidebarCollapsed,
            'py-4  translate ease-in-out  duration-300': !isSidebarCollapsed,
          },
        )}
      >
        <div className="flex  gap-4 items-center ">
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
          <div className="flex flex-col items-start">
            <h1
              className={classNames('text-xl font-semibold', {
                // 'text-md translate ease-in  duration-300':
                //   isSidebarCollapsed,
                // 'text-xl translate ease-in-out  duration-300':
                //   !isSidebarCollapsed,
              })}
            >
              Hey, Markus
            </h1>
            <p
              className={classNames('text-[11px] text-gray-500', {
                // 'text-[11px] translate ease-in  duration-300':
                //   isSidebarCollapsed,
                // 'text-sm translate ease-in-out  duration-300':
                //   !isSidebarCollapsed,
              })}
            >
              Sunday, June 25, 2024
            </p>
          </div>
        </div>
        <div className="flex w-[400px] items-center space-x-4 px-4">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 w-full border rounded-lg"
          />
          {/* <img src="profile.jpg" alt="Profile" className="w-10 h-10 rounded-full" /> */}
          <div className=" rounded-full text-gray-400 p-2 px-4 bg-white shadow-sm shadow-gray-300   text-center">
            <span className="">A</span>
          </div>
          <div className=" rounded-full text-gray-400 p-2 px-4 bg-white shadow-sm shadow-gray-300   text-center">
            <span className="">A</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
