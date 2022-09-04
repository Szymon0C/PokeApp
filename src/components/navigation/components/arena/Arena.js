import { useContext } from "react";

import { ArenaContext } from "../../../../contexts/ArenaContext";

import useFights from "../../../../customHooks/useFights";

import Pokemon from "../homePage/components/pokeList/components/pokemon/Pokemon";

import * as S from "./style";

export default function Arena() {
  const { arenaPokemons } = useContext(ArenaContext);

  const { winner } = useFights(arenaPokemons[0], arenaPokemons[1]);

  if (arenaPokemons.length === 0) {
    return <h1>Brak Pokemonów na arenie!</h1>;
  }

  return (
    <S.ArenaWrapper>
      <S.PokemonsWrapper>
        {arenaPokemons.map((pokemon) => {
          return <Pokemon key={pokemon} url={pokemon} />;
        })}
      </S.PokemonsWrapper>
      <button
        onClick={() => {
          console.log(winner);
        }}
      >
        Let's fight
      </button>
    </S.ArenaWrapper>
  );
}
