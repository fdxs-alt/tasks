import { useEffect, useRef } from "react";

function usePreviousValue<T>(value: T) {
  const valueRef = useRef<T | null>(null);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
}

export default usePreviousValue;
