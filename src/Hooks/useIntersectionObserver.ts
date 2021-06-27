import { useEffect, useRef, useState } from "react";
function useIntersectionObserver(
  options = {
    threshold: [1],
    rootMargin: "0px 0px 0px 0px",
  }
) {
  const [inView, setInView] = useState(false);

  const observer = useRef(
    new IntersectionObserver((entry: IntersectionObserverEntry[]) => {
      setInView(entry[0].isIntersecting);
    }, options)
  );

  const ref = useRef<HTMLObjectElement | null>(null);

  useEffect(() => {
    if (ref.current) observer.current.observe(ref.current);

    return () => observer.current.disconnect();
  }, [observer, ref]);

  return { ref, inView };
}

export default useIntersectionObserver;
