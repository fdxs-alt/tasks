import useArray from "./Hooks/useArray";
import React from "react";

const App: React.FC = () => {
  const setRandom = () => Math.round(Math.random() * 10000);
  const { value, add } = useArray([
    {
      content: "b",
      id: setRandom(),
    },
  ]);

  return (
    <div>
      <button onClick={() => add({ content: "lolo", id: setRandom() })}>
        Add
      </button>
      <span>{JSON.stringify(value, null, 2)}</span>
    </div>
  );
};

export default App;
