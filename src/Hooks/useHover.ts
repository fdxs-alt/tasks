import { useEffect, useRef, useState } from "react";

function useHover() {
  const [isHovered, setIsHovered] = useState(false);

  const ref = useRef<HTMLObjectElement | null>(null);

  const hovered = () => setIsHovered(true);

  const isNotHovered = () => setIsHovered(false);

  useEffect(() => {
    const a = ref.current;

    if (a) {
      a.addEventListener("mouseover", hovered);
      a.addEventListener("mouseleave", isNotHovered);
    }

    return () => {
      a?.removeEventListener("mouseover", hovered);
      a?.removeEventListener("mouseleave", isNotHovered);
    };
  }, [ref.current]);

  return { ref, isHovered };
}

export default useHover;
