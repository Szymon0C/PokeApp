import { useEffect, useState } from "react";
export default function usePokemonFetch(allResult, newPokemons) {
  const currentPokemons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [page, setPage] = useState(0);
  let restCheck = 0;
  const allPages = Math.ceil(allResult / 15);
  const rest = allResult - (allPages - 1) * 15;

  useEffect(() => {
    setPage(0);
  }, [allResult]);
  const result = currentPokemons
    .map((i) => {
      return i + 15 * page - newPokemons;
    })
    .filter((i) => {
      return i >= 0;
    })
    .filter((i) => {
      if (page === allPages - 1) {
        restCheck++;
        return restCheck <= rest;
      } else if (page > allPages - 1) {
        // eslint-disable-next-line
        return;
      }
      return true;
    });

  const nextPage = () => {
    if (page >= allPages - 1) {
      setPage(allPages - 1);
    } else {
      setPage(page + 1);
    }
  };
  const prevPage = () => {
    if (page <= 0) {
      setPage(0);
    } else setPage(page - 1);
  };
  return { result, page, allPages, nextPage, prevPage };
}
