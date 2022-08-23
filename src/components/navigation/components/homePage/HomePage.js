import * as S from "./style";

import PokeList from "./components/pokeList/PokeList";

export default function HomePage() {
  return (
    <S.Wrapper>
      <PokeList />
    </S.Wrapper>
  );
}
