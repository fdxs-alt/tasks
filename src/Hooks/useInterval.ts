import { useEffect, useRef } from "react";

const noop = () => {};

function useInterval(cb: CallableFunction, delay = 1000, force = false) {
  const callback = useRef<CallableFunction>(noop);

  useEffect(() => {
    callback.current = cb;
    if (force) {
      callback.current();
    }
  }, [cb]);

  useEffect(() => {
    const tick = () => callback.current();

    const interval = setInterval(tick, delay);

    return () => clearInterval(interval);
  }, [delay]);
}
export default useInterval;
