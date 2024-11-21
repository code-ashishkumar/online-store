import React, { useEffect, useState } from 'react';

const useDynamicPath = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const updatePath = () => setPath(window.location.pathname);

    // Update path on popstate event (for back/forward navigation)
    window.addEventListener('popstate', updatePath);

    // For custom navigation logic, update path whenever pushState or replaceState is called
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function (...args) {
      originalPushState.apply(window.history, args);
      updatePath();  // Manually trigger path update
    };

    window.history.replaceState = function (...args) {
      originalReplaceState.apply(window.history, args);
      updatePath();  // Manually trigger path update
    };

    return () => {
      // Clean up listeners and restore original methods
      window.removeEventListener('popstate', updatePath);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, []);

  return path;
};

export default useDynamicPath