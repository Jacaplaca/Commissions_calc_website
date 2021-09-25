import { useState, useEffect } from "react";

const useMainStore = () => {
  const [background, setBackground] = useState("#ffffff");

  const updateBackground = (color: string) => {
    setBackground(color);
  };

  useEffect(() => {}, []);

  return { background, updateBackground };
};

export default useMainStore;
