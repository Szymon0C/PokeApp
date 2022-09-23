import { useState } from "react";
import * as S from "./style";

import PokeList from "./components/pokeList/PokeList";
import Input from "./components/input/Input";
export default function HomePage(props) {
  const [search, setSearch] = useState("");

  return (
    <S.Wrapper>
      <Input
        search={(type) => {
          setSearch(type);
        }}
        result={search}
      />
      <PokeList result={search} />
    </S.Wrapper>
  );
}
