import { useContext } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { ArenaContext } from "../../../../../../../../contexts/ArenaContext";
import { EditContext } from "../../../../../../../../contexts/EditContext";
import { IndexContext } from "../../../../../../../../contexts/IndexContext";
import { ThemeContext } from "../../../../../../../../contexts/ThemeContext";
import { UsersContext } from "../../../../../../../../contexts/UsersContext";
import usePokemonFetch from "../../../../../../../../customHooks/usePokemonFetch";
import Pokemon from "./component/pokemon/Pokemon";
import * as S from "./style";

export default function PokeList(props) {
  const search = props.search;
  const { theme } = useContext(ThemeContext);
  const { newPokemon } = useContext(EditContext);
  const { addArenaPokemon, arenaPokemons } = useContext(ArenaContext);
  const { logged } = useContext(UsersContext);

  const finalPokemons = props.result.filter((pokemon) => {
    return pokemon.name.includes(search);
  });
  const location = useLocation();
  const navigate = useNavigate();
  const { setIndex } = useContext(IndexContext);

  const { result, page, allPages, nextPage, prevPage } = usePokemonFetch(
    finalPokemons.length,
    newPokemon.length
  );
  if (finalPokemons.length === 0) {
    return <h2>No results, enter a different name</h2>;
  }
  const showComponent = (index) => {
    if (location.pathname === "/") {
      return (
        <S.StyledLink
          to={"/full-page"}
          onClick={() => {
            setIndex(parseInt(finalPokemons[index].url.substring(34)));
          }}
        >
          <Pokemon key={index} url={finalPokemons[index].url} />
        </S.StyledLink>
      );
    } else if (location.pathname === "/arena-choose") {
      return (
        <div
          onClick={() => {
            if (arenaPokemons.length < 2) {
              addArenaPokemon(index + 1);
              navigate("/arena");
            } else {
              return <span>Arena is full</span>;
            }
          }}
        >
          <Pokemon key={index} url={finalPokemons[index].url} />
        </div>
      );
    } else {
      if (logged) {
        return (
          <S.StyledLink
            to={"/pokemon-edit"}
            onClick={() => {
              setIndex(parseInt(finalPokemons[index].url.substring(34)));
            }}
          >
            <Pokemon key={index} url={finalPokemons[index].url} />
          </S.StyledLink>
        );
      } else
        return (
          <S.StyledLink
            to={"/full-page"}
            onClick={() => {
              setIndex(parseInt(finalPokemons[index].url.substring(34)));
            }}
          >
            <Pokemon key={index} url={finalPokemons[index].url} />
          </S.StyledLink>
        );
    }
  };
  return (
    <>
      <S.Wrapper>
        {page === 0 &&
          newPokemon.map((i) => {
            return <Pokemon key={Math.random()} new={i} />;
          })}
        {result.map((i) => {
          return (
            <S.StyledButton key={i} role="button">
              {showComponent(i)}
            </S.StyledButton>
          );
        })}
      </S.Wrapper>
      <S.ButtonsWrapper>
        <S.PageButtons
          theme={theme}
          onClick={prevPage}
          hide={page === 0 ? "hidden" : "visible"}
        >
          prev page
        </S.PageButtons>

        <S.StyledPage theme={theme}>{`${
          page + 1
        } of ${allPages} `}</S.StyledPage>

        <S.PageButtons
          theme={theme}
          onClick={nextPage}
          hide={page + 1 < allPages ? "visible" : "hidden"}
        >
          next
        </S.PageButtons>
      </S.ButtonsWrapper>
    </>
  );
}
