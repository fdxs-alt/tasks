import { useState, useCallback, useEffect } from "react";

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);

  const handleScroll = useCallback(() => setScrollPosition(window.scrollY), []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return scrollPosition;
}

export default useScrollPosition;
