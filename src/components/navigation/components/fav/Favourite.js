import { useContext } from "react";

import Pokemon from "../homePage/components/pokeList/components/pokemon/Pokemon";

import { FavouritePokemonContext } from "../../../../contexts/FavouritePokemonsContext";

import * as S from "./style";

export default function Favourite() {
  const { favPokemons } = useContext(FavouritePokemonContext);
  if (favPokemons.length === 0) {
    return <h1>Brak ulubionych Pokemonów</h1>;
  }
  return (
    <S.FavWrapper>
      {favPokemons.map((pokemon) => {
        return <Pokemon key={pokemon} url={pokemon} />;
      })}
    </S.FavWrapper>
  );
}
