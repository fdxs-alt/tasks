import { useCallback, useEffect, useState } from "react";

function useAsync<T, E = string>(
  apiCallFunction: () => Promise<T>,
  immediate = true
) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<E | null>(null);

  const asyncAction = useCallback(async () => {
    setLoading(true);
    setData(null);
    setError(null);

    try {
      const response = await apiCallFunction();
      setData(response);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  }, [apiCallFunction]);

  useEffect(() => {
    if (immediate) {
      asyncAction();
    }
  }, [immediate, asyncAction]);

  return { loading, data, error, asyncAction };
}

export default useAsync;
