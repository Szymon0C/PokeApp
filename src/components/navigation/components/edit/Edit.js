import PokeList from "../homePage/components/pokeList/PokeList";

import * as S from "./style";

export default function Edit() {
  return (
    <>
      <h2>Choose Pokemon to edit</h2>
      <S.PokeListWrapper>
        <PokeList result="" />
      </S.PokeListWrapper>
    </>
  );
}
