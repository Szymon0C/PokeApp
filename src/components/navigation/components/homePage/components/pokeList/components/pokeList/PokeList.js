import { useContext } from "react";
import Pokemon from "./component/pokemon/Pokemon";
import * as S from "./style";
import usePokemonFetch from "../../../../../../../../customHooks/usePokemonFetch";

import { IndexContext } from "../../../../../../../../contexts/IndexContext";
import { ThemeContext } from "../../../../../../../../contexts/ThemeContext";
import { EditContext } from "../../../../../../../../contexts/EditContext";

import { useLocation } from "react-router-dom";
export default function PokeList(props) {
  const search = props.search;
  const { theme } = useContext(ThemeContext);
  const { newPokemon, updatedPokemon } = useContext(EditContext);
  const finalPokemons = props.result.filter((pokemon) => {
    return pokemon.name.includes(search);
  });
  const location = useLocation();
  const { setIndex } = useContext(IndexContext);

  const { result, page, allPages, nextPage, prevPage } = usePokemonFetch(
    finalPokemons.length,
    newPokemon.length
  );

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
    } else {
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
    }
  };
  return (
    <>
      <S.Wrapper>
        {page === 0 &&
          newPokemon.map((i) => {
            return <Pokemon key={i.name} new={i} />;
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
        <S.PageButtons theme={theme} onClick={prevPage}>
          prev page
        </S.PageButtons>
        <S.StyledPage theme={theme}>{`${
          page + 1
        } of ${allPages} `}</S.StyledPage>
        <S.PageButtons theme={theme} onClick={nextPage}>
          next
        </S.PageButtons>
      </S.ButtonsWrapper>
    </>
  );
}
