import { useState, useEffect, RefObject } from 'react';

export const useScrollProgress = (ref: RefObject<HTMLElement>) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = ref.current.offsetHeight;
      
      // Calculate how much of the element has been scrolled through
      const scrollStart = windowHeight; // When element top reaches bottom of viewport
      const scrollEnd = -elementHeight; // When element bottom leaves top of viewport
      const totalScrollDistance = scrollStart - scrollEnd;
      const currentPosition = scrollStart - rect.top;
      
      const newProgress = Math.max(0, Math.min(1, currentPosition / totalScrollDistance));
      setProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return progress;
};
