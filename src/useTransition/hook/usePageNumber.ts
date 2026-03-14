import { useCallback, useState, useTransition } from "react";

export const usePageNumber = () => {
  const [page, setPage] = useState(1);
  const [isPending, startTransition] = useTransition();

  const incrementPage = useCallback(() => {
    startTransition(() => setPage((prev) => prev + 1));
  }, []);

  const decrementPage = useCallback(() => {
    startTransition(() => setPage((prev) => Math.max(prev - 1)));
  }, []);

  return { page, incrementPage, decrementPage, isPending };
};
