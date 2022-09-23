import { useContext } from "react";
import Pokemon from "../pokemon/Pokemon";

import * as S from "./style";
import usePokemonFetch from "../../../../../../../../customHooks/usePokemonFetch";
import usePage from "../../../../../../../../customHooks/usePage";

import { IndexContext } from "../../../../../../../../contexts/IndexContext";
import { ThemeContext } from "../../../../../../../../contexts/ThemeContext";

import { useLocation } from "react-router-dom";
export default function NewPokemon(props) {
  const search = props.search;
  const { theme } = useContext(ThemeContext);
  const finalPokemons = props.result.filter((pokemon) => {
    return pokemon.name.includes(search);
  });

  const location = useLocation();
  const { setIndex } = useContext(IndexContext);
  const { page, nextPage, prevPage } = usePage();
  const { result } = usePokemonFetch(finalPokemons.length, 0, page);

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
        {result.map((i) => {
          return (
            <S.StyledButton key={i} role="button">
              {/* {showComponent(parseInt(finalPokemons[i].url))} */}
              {showComponent(i)}
            </S.StyledButton>
          );
        })}
      </S.Wrapper>
      <S.ButtonsWrapper>
        <S.PageButtons theme={theme} onClick={prevPage}>
          prev page
        </S.PageButtons>
        <S.StyledPage>{page + 1}</S.StyledPage>
        <S.PageButtons theme={theme} onClick={nextPage}>
          next
        </S.PageButtons>
      </S.ButtonsWrapper>
    </>
  );
}
