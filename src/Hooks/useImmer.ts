import { produce } from "immer";
import { useCallback, useState } from "react";

function useImmer<T>(initalValue: T) {
  const [state, setState] = useState(initalValue);

  const setImmer = useCallback((setter) => setState(produce(setter)), []);

  return { state, setImmer };
}

export default useImmer;
