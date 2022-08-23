import { useState } from "react";

import Pokemon from "./components/Pokemon";

export default function PokeList() {
  const [page, setPage] = useState(0);
  const currentPokemons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
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
  return (
    <>
      {currentPokemons.map((index) => {
        return <Pokemon key={index} url={index + 15 * page} />;
      })}

      <button onClick={prevPage}>prev page</button>
      <span>{page + 1}</span>
      <button onClick={nextPage}>next page</button>
    </>
  );
}
