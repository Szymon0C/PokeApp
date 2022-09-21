import { useContext } from "react";

import usePage from "../../../../../../customHooks/usePage";
import usePokemonFetch from "../../../../../../customHooks/usePokemonFetch";

import Pokemon from "./components/pokemon/Pokemon";

import * as S from "./style";
import { useLocation } from "react-router-dom";
import { IndexContext } from "../../../../../../contexts/IndexContext";
import { EditContext } from "../../../../../../contexts/EditContext";
export default function PokeList() {
  const location = useLocation();
  const { page, nextPage, prevPage } = usePage();
  const { setIndex } = useContext(IndexContext);
  const { newPokemon } = useContext(EditContext);
  const { result } = usePokemonFetch(newPokemon.length, page);

  const showComponent = (i) => {
    if (location.pathname === "/") {
      return (
        <S.StyledLink
          to={"/full-page"}
          onClick={() => {
            setIndex(i + 15 * page);
          }}
        >
          <Pokemon key={i} url={i + 15 * page} />
        </S.StyledLink>
      );
    } else {
      return (
        <S.StyledLink
          to={"/pokemon-edit"}
          onClick={() => {
            setIndex(i + 15 * page);
          }}
        >
          <Pokemon key={i} url={i + 15 * page} />
        </S.StyledLink>
      );
    }
  };

  return (
    <>
      {newPokemon.map((pokemon) => {
        return (
          <S.StyledButton key={pokemon.name} role="button">
            <Pokemon edit={pokemon} key={pokemon.name} />
          </S.StyledButton>
        );
      })}
      {result.map((i) => {
        return (
          <S.StyledButton key={i} role="button">
            {showComponent(i)}
          </S.StyledButton>
        );
      })}
      <S.ButtonsWrapper>
        <S.PageButtons onClick={prevPage}>prev page</S.PageButtons>
        <S.StyledPage>{page + 1}</S.StyledPage>
        <S.PageButtons onClick={nextPage}>next page</S.PageButtons>
      </S.ButtonsWrapper>
    </>
  );
}
