import { useState } from "react";
import PokeList from "../homePage/components/pokeList/PokeList";
import Input from "../homePage/components/input/Input";
import * as S from "./style";

export default function Edit() {
  const [search, setSearch] = useState("");
  return (
    <>
      <h2>Choose Pokemon to edit</h2>

      <S.PokeListWrapper>
        <Input
          search={(type) => {
            setSearch(type);
          }}
          result={search}
        />
        <PokeList result={search} />
      </S.PokeListWrapper>
    </>
  );
}
