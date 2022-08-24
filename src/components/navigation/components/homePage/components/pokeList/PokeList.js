import { useState } from "react";

import usePage from "../../../../../../customHooks/usePage";

import Pokemon from "./components/pokemon/Pokemon";

export default function PokeList() {
  const { page, nextPage, prevPage } = usePage();
  const currentPokemons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      {currentPokemons.map((index) => {
        return <Pokemon key={index} url={index + 15 * page} />;
      })}
      <div>
        <button onClick={prevPage}>prev page</button>
        <span>{page + 1}</span>
        <button onClick={nextPage}>next page</button>
      </div>
    </>
  );
}
