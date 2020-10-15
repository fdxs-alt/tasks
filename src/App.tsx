import { usePagination } from "./Hooks/usePagination";
import React from "react";
import { data } from "./Data/data";
import PaginationExample from "./Components/PaginationExample";

const App: React.FC = () => {
  const [{ actualPageIdx, lastPageIdx, entriesOnSelectedPage }] = usePagination(
    data
  );

  console.log(actualPageIdx, lastPageIdx, entriesOnSelectedPage);
  return (
    <div>
      <PaginationExample />
    </div>
  );
};

export default App;
