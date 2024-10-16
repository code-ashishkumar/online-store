import { useEffect } from 'react';

export const useScroll = (isMobileMenuOpen) => {
  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    
    if (isMobileMenuOpen) {
      html.style.overflow = 'hidden';
    } else {
      html.style.overflow = 'auto';
    }

    return () => {
      html.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);
};

export default useScroll;
