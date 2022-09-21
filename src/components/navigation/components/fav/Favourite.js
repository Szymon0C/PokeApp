import { useContext } from "react";

import Pokemon from "../homePage/components/pokeList/components/pokemon/Pokemon";

import { FavouritePokemonContext } from "../../../../contexts/FavouritePokemonsContext";

import * as S from "./style";

export default function Favourite() {
  const { favPokemons } = useContext(FavouritePokemonContext);

  return (
    <S.FavWrapper>
      {favPokemons.map((pokemon) => {
        return <Pokemon key={pokemon} url={pokemon} />;
      })}
      {favPokemons.length === 0 && <h1>No favorite Pokemon</h1>}
    </S.FavWrapper>
  );
}
