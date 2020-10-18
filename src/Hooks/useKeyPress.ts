import { useEffect, useState } from "react";

function useKeyPress(key: string) {
  const [pressed, setPressed] = useState(false);

  const down = (e: KeyboardEvent) => {
    if (e.key === key) setPressed(true);
  };

  const up = (e: KeyboardEvent) => {
    if (e.key === key) setPressed(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);

    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  return pressed;
}

export default useKeyPress;
