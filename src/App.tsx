import useIntersectionObserver from "./Hooks/useIntersectionObserver";
import React from "react";

const App: React.FC = () => {
  const { ref, inView } = useIntersectionObserver();
  console.log(inView);
  return (
    <div>
      <div style={{ height: "150vh" }}></div> <h1 ref={ref}>Dupa</h1>
    </div>
  );
};

export default App;
