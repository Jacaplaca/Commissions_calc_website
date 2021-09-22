import { useEffect, useState } from "react";
import useDebouncedEffect from "../Components/NoCopy/useDebouncedEffect";

const useOnScreen = (ref) => {
  const [isIntersectingTemp, setIntersectingTemp] = useState(false);
  const [isIntersecting, setIntersecting] = useState(false);

  useDebouncedEffect(
    () => setIntersecting(isIntersectingTemp),
    [isIntersectingTemp],
    300
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // setTimeout(() => {
        //   setIntersecting(entry.isIntersecting);
        //   // element.current && observer.observe(element.current);
        // }, 500);
        setIntersectingTemp(entry.isIntersecting);
      },
      {
        rootMargin: "0px 0px 0px 0px",
      }
    );
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
};

export default useOnScreen;
