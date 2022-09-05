import { useContext, useEffect, useState } from "react";

import { ArenaContext } from "../../../../contexts/ArenaContext";

import useFights from "../../../../customHooks/useFights";

import Pokemon from "../homePage/components/pokeList/components/pokemon/Pokemon";

import * as S from "./style";

export default function Arena() {
  const { arenaPokemons, setArenaPokemons, addWin, addLose, win, lose } =
    useContext(ArenaContext);

  const { winner } = useFights(arenaPokemons[0], arenaPokemons[1]);
  const [winnerIndex, setWinnerIndex] = useState(null);
  const [loserIndex, setLoserIndex] = useState(null);
  const whoWin = () => {
    setWinnerIndex(
      arenaPokemons.filter((index) => {
        return index === winner;
      })[0]
    );
    setLoserIndex(
      arenaPokemons.filter((index) => {
        return index !== winner;
      })[0]
    );
  };

  const showResults = () => {
    console.log(
      "win" +
        win.filter((e) => {
          return typeof e === "number";
        }).length
    );
    console.log(
      "lose" +
        lose.filter((e) => {
          return typeof e === "number";
        }).length
    );
    return (
      <>
        <Pokemon url={winnerIndex} />
        <h2>is a winner!!!</h2>
      </>
    );
  };

  useEffect(() => {
    addWin(winnerIndex);
    addLose(loserIndex);
  }, [winnerIndex]);

  if (arenaPokemons.length === 0) {
    return <h1>Brak Pokemonów na arenie!</h1>;
  }

  return (
    <S.ArenaWrapper>
      {!winnerIndex && (
        <>
          <S.PokemonsWrapper>
            {arenaPokemons.map((pokemon) => {
              return <Pokemon key={pokemon} url={pokemon} />;
            })}
          </S.PokemonsWrapper>
        </>
      )}
      <S.ClearButton
        onClick={() => {
          setArenaPokemons([]);
        }}
      >
        Clear the arena!
      </S.ClearButton>
      {winner && <S.StyledButton onClick={whoWin}>Let's fight</S.StyledButton>}
      {winnerIndex && showResults()}
    </S.ArenaWrapper>
  );
}
