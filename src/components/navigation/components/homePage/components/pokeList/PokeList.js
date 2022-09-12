import { useContext } from "react";

import usePage from "../../../../../../customHooks/usePage";

import Pokemon from "./components/pokemon/Pokemon";

import * as S from "./style";

import { IndexContext } from "../../../../../../contexts/IndexContext";

export default function PokeList() {
  const { page, nextPage, prevPage } = usePage();
  const { setIndex } = useContext(IndexContext);
  const currentPokemons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <>
      {currentPokemons.map((i) => {
        return (
          <S.StyledButton key={i}>
            <S.StyledLink
              to={"/full-page"}
              onClick={() => {
                setIndex(i + 15 * page);
              }}
            >
              <Pokemon key={i} url={i + 15 * page} />
            </S.StyledLink>
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
