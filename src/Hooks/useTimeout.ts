import { useEffect } from "react";

function useTimeout(fn: CallableFunction, delay = 1000) {
  useEffect(() => {
    const timeout = setTimeout(() => fn(), delay);
    return () => clearTimeout(timeout);
  }, [fn, delay]);
}

export default useTimeout;
