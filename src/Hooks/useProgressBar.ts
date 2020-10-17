import { RefObject, useEffect, useState } from "react";

function useProgressBar(target: RefObject<HTMLObjectElement>) {
  const [progress, setProgress] = useState(0);

  const scroll = () => {
    if (!target.current) {
      return;
    }

    const element = target.current;

    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight;

    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (windowScrollTop > totalHeight) {
      return setProgress(100);
    }

    setProgress((windowScrollTop / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return progress;
}

export default useProgressBar;
