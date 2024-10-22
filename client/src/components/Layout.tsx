import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Layout({ children } : any) {
  return (
    <div className="space-y-11 py-6 px-5 lg:py-7 lg:px-12">
      {children}
    </div>
  );
}

export default Layout;
