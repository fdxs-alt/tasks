import { useEffect, useMemo, useState } from "react";

interface data {
  id: string;
  data: string;
}

export function usePagination(dataEntries: data[], elementsOnPage = 50) {
  const [page, setPage] = useState(0);
  
  const lastPage = useMemo(
    () => Math.floor(dataEntries.length / elementsOnPage),
    [page]
  );

  const [entriesOnSelectedPage, setEntriesOnSelectedPage] = useState(
    dataEntries.slice(0, elementsOnPage)
  );

  const goToPage = (pageIdx: number) => {
    setPage(pageIdx);
  };

  const goToNextPage = () => {
    if (page < lastPage) setPage((page) => page + 1);
  };

  const goToLastPage = () => {
    setPage(lastPage);
  };

  const goToFirstPage = () => {
    setPage(0);
  };

  const goToPrevPage = () => {
    if (page > 0) setPage((page) => page - 1);
  };

  useEffect(() => {
    setEntriesOnSelectedPage(
      dataEntries.slice(page * elementsOnPage, (page + 1) * elementsOnPage)
    );
  }, [page]);

  return [
    {
      actualPageIdx: page,
      lastPageIdx: lastPage,
      entriesOnSelectedPage,
      goToPage,
      goToNextPage,
      goToPrevPage,
      goToLastPage,
      goToFirstPage,
    },
  ];
}
