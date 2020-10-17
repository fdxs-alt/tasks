import { useEffect, useState } from "react";

function useDebounce(value: string, delay = 1000) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const setValue = setTimeout(() => setDebounceValue(value), delay);

    return () => clearTimeout(setValue);
  }, [delay, value]);

  return debounceValue;
}

export default useDebounce;
