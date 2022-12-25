import { useEffect, useState } from "react";

export const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => {
      const updatedWidth = window.innerWidth;

      setWidth(updatedWidth);
    };

    window.addEventListener("resize", updateWidth);

    updateWidth();

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return width;
};
