import { useCallback, useState } from "react";

function useIntersectionObserver({
  options = {
    threshold: [1],
    rootMargin: "0px 0px 0px 0px",
  },
  once = false,
}) {
  const [inView, setInView] = useState(false);

  const ref = useCallback((node: HTMLObjectElement) => {
    const observer = new IntersectionObserver((entry, obs) => {
      const intersecting = entry[0].isIntersecting;

      if (intersecting && once) {
        obs.unobserve(node);
        setInView(true);
      } else {
        setInView(intersecting);
      }
    }, options);

    observer.observe(node);
  }, []);

  return { ref, inView };
}

export default useIntersectionObserver;
