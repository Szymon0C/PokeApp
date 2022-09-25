import { useState } from "react";

import Input from "./components/input/Input";
import PokeData from "./components/pokeList/PokeData";
import * as S from "./style";

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

      <PokeData result={search} />
    </S.Wrapper>
  );
}
