import { useEffect, useState } from "react";

function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onUpdateMousePosition = (e: MouseEvent) =>
      setPosition({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", onUpdateMousePosition);

    return () => window.removeEventListener("mousedown", onUpdateMousePosition);
  }, []);

  return position;
}

export default useMousePosition;
