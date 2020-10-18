import { useEffect, useRef } from "react";

function useTitle(title: string, getDefaultOnOnMount?: true) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (getDefaultOnOnMount) {
        document.title = defaultTitle.current;
      }
    };
  }, []);
}

export default useTitle;
