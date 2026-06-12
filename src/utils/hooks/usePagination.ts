import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { scrollTop } from "../helpers/ui/scrollTop";
import { getSearchWith } from "../helpers/searchParams/searchHelper";

const PAGE_SIZE = 20;

export const usePagination = <T>(items: T[] = [], pageSize = PAGE_SIZE) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Math.max(1, Number(searchParams.get("page") ?? 1));
  const totalPages = Math.ceil(items.length / pageSize);

  const currentItems = useMemo(
    () => items.slice((page - 1) * pageSize, page * pageSize),
    [items, page, pageSize],
  );

  const goTo = (p: number) => {
    const clamped = Math.min(Math.max(1, p), totalPages);

    setSearchParams(
      getSearchWith(searchParams, {
        page: clamped === 1 ? null : String(clamped)
      }),
    );

    scrollTop();
  };

  return {
    currentItems,
    page,
    totalPages,
    goTo,
    next: () => goTo(page + 1),
    prev: () => goTo(page - 1),
    isFirst: page === 1,
    isLast: page === totalPages,
  };
};
