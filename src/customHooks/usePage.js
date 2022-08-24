import { useState } from "react";

export default function usePage() {
  const [page, setPage] = useState(0);

  const nextPage = () => {
    if (page >= 59) {
      setPage(59);
    } else {
      setPage(page + 1);
    }
  };
  const prevPage = () => {
    if (page <= 0) {
      setPage(0);
    } else setPage(page - 1);
  };

  return { page, nextPage, prevPage };
}
