import { useContext, useEffect, useState } from "react";

import { ArenaContext } from "../../../../contexts/ArenaContext";
import { EditContext } from "../../../../contexts/EditContext";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import useFights from "../../../../customHooks/useFights";

import Pokemon from "../homePage/components/pokeList/components/pokeList/component/pokemon/Pokemon";

import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import * as S from "./style";

export default function Arena() {
  const { arenaPokemons, setArenaPokemons, addWin, addLose } =
    useContext(ArenaContext);
  const { updatedPokemon } = useContext(EditContext);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
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
        <Pokemon url={`https://pokeapi.co/api/v2/pokemon/${winnerIndex}/`} />
        <h2>is a winner!!!</h2>
      </>
    );
  };

  useEffect(() => {
    addWin(winnerIndex);
    addLose(loserIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winnerIndex, loserIndex]);

  return (
    <S.ArenaWrapper>
      {arenaPokemons.length === 0 && (
        <>
          <h1>No pokemon in the arena!</h1>
          <S.PokemonsWrapper>
            <S.Placeholder
              theme={theme}
              onClick={() => {
                navigate("/arena-choose");
              }}
            >
              <S.Wrapper>
                <QuestionMarkIcon fontSize="large" />
                <span>click and choose!</span>
              </S.Wrapper>
            </S.Placeholder>
            <S.Placeholder
              theme={theme}
              onClick={() => {
                navigate("/arena-choose");
              }}
            >
              <S.Wrapper>
                <QuestionMarkIcon fontSize="large" />
                <span>click and choose!</span>
              </S.Wrapper>
            </S.Placeholder>
          </S.PokemonsWrapper>
        </>
      )}

      {!winnerIndex && (
        <>
          <S.PokemonsWrapper>
            {arenaPokemons.map((pokemon) => {
              return (
                <Pokemon
                  key={pokemon}
                  url={`https://pokeapi.co/api/v2/pokemon/${pokemon}/`}
                />
              );
            })}
          </S.PokemonsWrapper>
        </>
      )}

      {winner && (
        <S.ButtonWrapper>
          <S.StyledButton onClick={whoWin}>Let's fight</S.StyledButton>
          <Link to={"/"}>
            <S.ClearButton
              onClick={() => {
                setArenaPokemons([]);
              }}
            >
              Leave the arena
            </S.ClearButton>
          </Link>
        </S.ButtonWrapper>
      )}
      {winnerIndex && showResults()}
    </S.ArenaWrapper>
  );
}
