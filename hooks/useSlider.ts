import { useState, useEffect } from "react";

const useSlider = (duration: number) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((state) => state + 1);
    }, duration);
    return () => clearInterval(interval);
  }, []);

  return currentSlideIndex;
};

export default useSlider;
