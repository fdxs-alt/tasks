import { usePagination } from "../Hooks/usePagination";
import React, { useMemo } from "react";
import { data } from "../Data/data";

const PaginationExample: React.FC = () => {
  const [
    {
      actualPageIdx,
      lastPageIdx,
      entriesOnSelectedPage,
      goToPage,
      goToLastPage,
      goToFirstPage,
      goToNextPage,
      goToPrevPage,
    },
  ] = usePagination(data);

  return useMemo(() => {
    return (
      <div>
        <h4>Page: {actualPageIdx + 1}</h4>
        {[...Array(lastPageIdx + 1).keys()].map((el: number) => (
          <button type="button" key={el} onClick={() => goToPage(el)}>
            {el + 1}
          </button>
        ))}
        <button type="button" onClick={() => goToFirstPage()}>
          First
        </button>
        <button type="button" onClick={() => goToLastPage()}>
          Last
        </button>
        <button type="button" onClick={() => goToNextPage()}>
          Next
        </button>
        <button type="button" onClick={() => goToPrevPage()}>
          Prev
        </button>
        {entriesOnSelectedPage.map((el) => (
          <div key={el.id}>{el.id}</div>
        ))}
      </div>
    );
  }, [entriesOnSelectedPage]);
};

export default PaginationExample;
