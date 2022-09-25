import { useContext, useEffect, useState } from "react";

import Confetti from "react-confetti";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { Link, useNavigate } from "react-router-dom";

import { ArenaContext } from "../../../../contexts/ArenaContext";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import useFights from "../../../../customHooks/useFights";
import Pokemon from "../homePage/components/pokeList/components/pokeList/component/pokemon/Pokemon";
import * as S from "./style";

export default function Arena() {
  const { arenaPokemons, setArenaPokemons, addWin, addLose } =
    useContext(ArenaContext);
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
        <Confetti height={window.innerHeight} />
        <S.WinnerWrapper>
          <Pokemon url={`https://pokeapi.co/api/v2/pokemon/${winnerIndex}/`} />
          <S.Message theme={theme}>is a winner!!!</S.Message>
        </S.WinnerWrapper>
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
          <S.Message theme={theme}>No pokemon in the arena!</S.Message>
        </>
      )}

      {!winnerIndex && (
        <S.PokemonsWrapper>
          {arenaPokemons[0] && (
            <Pokemon
              key={arenaPokemons[0]}
              url={`https://pokeapi.co/api/v2/pokemon/${arenaPokemons[0]}/`}
            />
          )}

          {!arenaPokemons[0] && (
            <S.Placeholder
              theme={theme}
              onClick={() => {
                navigate("/arena-choose");
              }}
            >
              <S.Wrapper theme={theme}>
                <QuestionMarkIcon fontSize="large" />
                <span>click and choose!</span>
              </S.Wrapper>
            </S.Placeholder>
          )}

          {arenaPokemons[1] && (
            <Pokemon
              key={arenaPokemons[1]}
              url={`https://pokeapi.co/api/v2/pokemon/${arenaPokemons[1]}/`}
            />
          )}

          {!arenaPokemons[1] && (
            <S.Placeholder
              theme={theme}
              onClick={() => {
                navigate("/arena-choose");
              }}
            >
              <S.Wrapper theme={theme}>
                <QuestionMarkIcon fontSize="large" />
                <span>click and choose!</span>
              </S.Wrapper>
            </S.Placeholder>
          )}
        </S.PokemonsWrapper>
      )}

      {!winnerIndex && (
        <S.ButtonWrapper>
          <S.StyledButton theme={theme} onClick={whoWin}>
            Let's fight
          </S.StyledButton>
          <Link to={"/"}>
            <S.ClearButton
              theme={theme}
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
