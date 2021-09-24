import { useState, useEffect } from "react";

const useMainStore = () => {
  const [background, setBackground] = useState("#ffffff");

  const updateBackground = (color) => {
    setBackground(color);
  };

  useEffect(() => {}, []);

  return { background, updateBackground };
};

export default useMainStore;
