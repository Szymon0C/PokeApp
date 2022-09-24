import { useState } from "react";
import PokeData from "../homePage/components/pokeList/PokeData";
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
        <PokeData result={search} />
      </S.PokeListWrapper>
    </>
  );
}
