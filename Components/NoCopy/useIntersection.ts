import { useState, useEffect } from "react";

const useIntersection = (element, rootMargin, delay = 500) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState(entry.isIntersecting);
          observer.unobserve(element.current);
        }
      },
      {
        rootMargin,
      }
    );
    setTimeout(() => {
      element.current && observer.observe(element.current);
    }, delay);

    return () => {
      observer.unobserve(element.current);
    };
  }, []);

  return isVisible;
};

export default useIntersection;
