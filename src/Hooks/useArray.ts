import { useCallback, useState } from "react";

function useArray<T>(initalState: T[] = [] as T[]) {
  const [value, setValue] = useState(initalState);

  return {
    value,
    setValue,
    add: useCallback((value: T) => setValue((prev) => [value, ...prev]), []),
    clear: useCallback(() => setValue([]), []),
    removeByIndex: useCallback(
      (index: number) =>
        setValue((prev) => {
          prev.splice(index, 1);
          return prev;
        }),
      []
    ),
  };
}
export default useArray;
