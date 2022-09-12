import { useContext, useEffect, useState } from "react";

import { ArenaContext } from "../../../../contexts/ArenaContext";
import { Link } from "react-router-dom";
import useFights from "../../../../customHooks/useFights";

import Pokemon from "../homePage/components/pokeList/components/pokemon/Pokemon";

import * as S from "./style";

export default function Arena() {
  const { arenaPokemons, setArenaPokemons, addWin, addLose } =
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winnerIndex, loserIndex]);

  if (arenaPokemons.length === 0) {
    return (
      <>
        <h1>No pokemon in the arena!</h1>
      </>
    );
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

      <Link to={"/"}>
        <S.ClearButton
          onClick={() => {
            setArenaPokemons([]);
          }}
        >
          Leave the arena
        </S.ClearButton>
      </Link>

      {winner && <S.StyledButton onClick={whoWin}>Let's fight</S.StyledButton>}
      {winnerIndex && showResults()}
    </S.ArenaWrapper>
  );
}
