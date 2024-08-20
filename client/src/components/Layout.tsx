import React from 'react';

function Layout({ children }) {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
      {children}
    </div>
  );
}

export default Layout;
