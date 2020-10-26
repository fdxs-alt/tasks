import { useEffect, useState } from "react";

function useMediaQuery(query: string) {
  const [matchesMedia, setMatchesMedia] = useState(false);

  useEffect(() => {
    let mounted = true;

    const q = window.matchMedia(query);

    const onChange = () => {
      if (!mounted) return;
      setMatchesMedia(!!q.matches);
    };

    q.addEventListener("change", onChange);

    return () => {
      mounted = false;
      q.removeEventListener("change", onChange);
    };
  }, [query]);

  return matchesMedia;
}

export default useMediaQuery;
