import { useContext, useEffect, useState } from "react";

import { ArenaContext } from "../../../../contexts/ArenaContext";

import useFights from "../../../../customHooks/useFights";

import Pokemon from "../homePage/components/pokeList/components/pokemon/Pokemon";

import * as S from "./style";

export default function Arena() {
  const { arenaPokemons } = useContext(ArenaContext);

  const { winner } = useFights(arenaPokemons[0], arenaPokemons[1]);
  const [winnerIndex, setWinnerIndex] = useState(null);
  const whoWin = () => {
    setWinnerIndex(
      arenaPokemons.filter((index) => {
        return index === winner;
      })[0]
    );
  };
  const showResults = () => {
    return (
      <>
        <Pokemon url={winnerIndex} />
        <h2>is a winner!!!</h2>
      </>
    );
  };
  if (arenaPokemons.length === 0) {
    return <h1>Brak Pokemonów na arenie!</h1>;
  }

  return (
    <S.ArenaWrapper>
      {!winnerIndex && (
        <S.PokemonsWrapper>
          {arenaPokemons.map((pokemon) => {
            return <Pokemon key={pokemon} url={pokemon} />;
          })}
        </S.PokemonsWrapper>
      )}

      {winner && <S.StyledButton onClick={whoWin}>Let's fight</S.StyledButton>}
      {winnerIndex && showResults()}
    </S.ArenaWrapper>
  );
}
