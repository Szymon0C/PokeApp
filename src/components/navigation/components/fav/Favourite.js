import { useContext } from "react";
import Pokemon from "../homePage/components/pokeList/components/pokeList/component/pokemon/Pokemon";
import { FavouritePokemonContext } from "../../../../contexts/FavouritePokemonsContext";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import * as S from "./style";

export default function Favourite() {
  const { favPokemons } = useContext(FavouritePokemonContext);
  const { theme } = useContext(ThemeContext);
  return (
    <S.FavWrapper>
      {favPokemons.map((pokemon) => {
        return (
          <Pokemon
            key={pokemon}
            url={`https://pokeapi.co/api/v2/pokemon/${pokemon}/`}
          />
        );
      })}
      {favPokemons.length === 0 && (
        <S.Message theme={theme}>No favorite Pokemon</S.Message>
      )}
    </S.FavWrapper>
  );
}
