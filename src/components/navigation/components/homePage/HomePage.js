import { useState } from "react";
import * as S from "./style";
import PokeData from "./components/pokeList/PokeData";
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
      <PokeData result={search} />
    </S.Wrapper>
  );
}
