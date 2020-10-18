import { useEffect, useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const resizeEvent = () =>
    setSize({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    window.addEventListener("resize", resizeEvent);

    return () => window.removeEventListener("resize", resizeEvent);
  }, []);

  return size;
}

export default useWindowSize;
