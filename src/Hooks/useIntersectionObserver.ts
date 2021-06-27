import { useEffect, useRef, useState } from "react";
function useIntersectionObserver({
  options = {
    threshold: [1],
    rootMargin: "0px 0px 0px 0px",
  },
  once = false,
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLObjectElement | null>(null);
  const observer = useRef(
    new IntersectionObserver((entry, obs) => {
      const isIntersecting = entry[0].isIntersecting;

      if (isIntersecting && once) {
        setInView(true);
        if (ref.current) {
          obs.unobserve(ref.current);
        }
      } else {
        setInView(isIntersecting);
      }
    }, options)
  );

  useEffect(() => {
    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => {
      observer.current.disconnect();
    };
  }, [observer, ref]);

  return { ref, inView };
}

export default useIntersectionObserver;
