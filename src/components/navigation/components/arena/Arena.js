import { useContext } from "react";

import { ArenaContext } from "../../../../contexts/ArenaContext";

import Pokemon from "../homePage/components/pokeList/components/pokemon/Pokemon";

export default function Arena() {
  const { arenaPokemons } = useContext(ArenaContext);
  if (arenaPokemons.length === 0) {
    return <h1>Brak Pokemonów na arenie!</h1>;
  }
  return (
    <>
      {arenaPokemons.map((pokemon) => {
        return <Pokemon key={pokemon} url={pokemon} />;
      })}
    </>
  );
}
