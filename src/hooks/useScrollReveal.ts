import { useEffect, useRef, useState, RefObject } from 'react';

const useScrollReveal = (threshold = 0.1): [RefObject<HTMLElement | null>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optionally unobserve after it becomes visible if you only want it to animate once
          // observer.unobserve(entry.target);
        } else {
          setIsVisible(false); // Reset visibility when out of view
        }
      },
      {
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

export default useScrollReveal;
