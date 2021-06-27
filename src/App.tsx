import React from "react";
import useIntersectionObserver from "./Hooks/useIntersectionObserverWithUseCallback";

const App: React.FC = () => {
  const { inView, ref } = useIntersectionObserver({ once: false });
  console.log(inView);
  return (
    <div>
      {Array(500)
        .fill(1)
        .map((el, i) => (
          <div key={i}>{el}</div>
        ))}
      <div ref={ref}>siemka</div>
    </div>
  );
};

export default App;
