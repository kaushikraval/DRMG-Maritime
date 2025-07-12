import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          const headerHeight = document.querySelector('header')?.offsetHeight || 80;
          const position = target.offsetTop - headerHeight;
          window.scrollTo({ top: position, behavior: 'smooth' });
        }, 100); // wait a bit for content to render
      }
    }
  }, [location]);

  return null;
};

export default ScrollToSection;
